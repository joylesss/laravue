<template>
  <div>
    <div>
      <v-container
      id="regular-tables"
      fluid
      tag="section"
    >
      <v-card>
        <base-material-card
          icon="mdi-counter"
          title=""
          class="px-5 py-3"
        />
        <v-card-title>
          <v-row>
            <v-col
              cols="2"
              sm="8"
            >
              <v-btn
                class="mx-2"
                small
                fab
                dark
                color="secondary"
                @click="dialogCreate = true"
              >
                <v-icon dark>
                  mdi-plus-thick
                </v-icon>
              </v-btn>
            </v-col>
            <v-col
              cols="10"
              sm="4"
            >
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Tìm kiếm ..."
                single-line
                hide-details
              />
            </v-col>
          </v-row>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="wins"
          :search="search"
        >
          <template v-slot:item.action="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="show( item )"
              v-text="'$vuetify.icons.playlistEdit'"
            />
            <v-icon
              small
              class="mr-2"
              @click="confirmDelete(item.id)"
              v-text="'$vuetify.icons.trashCanOutline'"
            />
          </template>
        </v-data-table>
      </v-card>
    </v-container>
    </div>
    <div>
      <v-dialog
        v-model="dialogShow"
        persistent
        max-width="600px"
      >
        <v-container
          id="user-profile"
          fluid
          tag="section"
        >
          <v-row justify="center">
            <v-col
              cols="12"
              md="12"
            >
              <base-material-card>
                <template v-slot:heading>
                  <div class="display-2 font-weight-light">
                    Chỉnh sửa thông tin người chiến thắng
                  </div>
                </template>

                <v-form>
                  <v-container class="py-0">
                    <v-row>
                      <input
                        v-model="win.id"
                        type="hidden"
                        name="id"
                      >
                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="win.user_name"
                          class="purple-input"
                          label="Tên người dùng"
                          name="user_name"
                          disabled
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="win.app_name"
                          class="purple-input"
                          label="Số điện thoại"
                          name="app_name"
                          disabled
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="win.prize"
                          class="purple-input"
                          label="Giải thưởng"
                          name="prize"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="win.plan_test"
                          class="purple-input"
                          label="Kế hoạch kiểm tra"
                          name="plan_test"
                        />
                      </v-col>

                      <v-col
                        cols="6"
                        class="text-left"
                      >
                        <v-btn
                          color="warning"
                          class="mr-0"
                          @click="dialogShow = false"
                        >
                          Hủy bỏ
                        </v-btn>
                      </v-col>
                      <v-col
                        cols="6"
                        class="text-right"
                      >
                        <v-btn
                          color="success"
                          class="mr-0 text-right"
                          @click="Update"
                        >
                          Cập nhật
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-form>
              </base-material-card>
            </v-col>
          </v-row>
        </v-container>
      </v-dialog>
      <v-dialog
        v-model="dialogDelete"
        persistent
        max-width="480px"
      >
        <v-container
          id="confirmDelete"
          fluid
          tag="section"
        >
          <v-row justify="center">
            <v-col
              cols="12"
              md="12"
            >
              <base-material-card
                icon="mdi-alert"
                title="Dữ liệu sau khi xóa sẽ không được phục hồi!"
                class="px-5 py-3 text-center"
                color="error"
              />
              <v-container
                class="py-0 theme--light v-card no-border-radius"
              >
                <v-row>
                  <v-col
                    cols="6"
                    class="text-left"
                  >
                    <v-btn
                      color="warning"
                      class="mr-0"
                      @click="dialogDelete = false"
                    >
                      Hủy bỏ
                    </v-btn>
                  </v-col>
                  <v-col
                    cols="6"
                    class="text-right"
                  >
                    <v-btn
                      color="error"
                      class="mr-0 text-right"
                      @click="Delete()"
                    >
                      Tiếp tục
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-dialog>
      <div class="">
        <v-bottom-sheet
          v-model="alert"
          inset
        >
          <v-alert
            v-model="alert"
            dismissible
            color="success"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-thumb-up"
            width="320"
          >
            {{ textAlert }}
          </v-alert>
        </v-bottom-sheet>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Wins',
    components: {},

    data () {
      return {
        search: '',
        headers: [
          {
            text: '#ID',
            align: 'center',
            sortable: false,
            value: 'id',
          },
          { text: 'Tên người dùng', value: 'user_name' },
          { text: 'Tên ứng dụng', value: 'app_name' },
          { text: 'Giải thưởng', value: 'prize' },
          { text: 'Kế hoạch kiểm tra', value: 'plan_test' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        wins: [],
        win: {
          id: '',
          user_name: '',
          app_name: '',
          prize: '',
          plan_test: '',
        },
        dialogCreate: false,
        dialogShow: false,
        dialogDelete: false,
        alert: false,
        textAlert: '',
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        getWins: 'getWins',
        updateWin: 'updateWin',
        deleteWin: 'deleteWin',
      }),

      initialize () {
        this.getWins().then(res => {
          this.wins = res.data.content.data
        }).catch(err => {
          console.log(err)
        })
      },

      show (item) {
        this.win.id = item.id
        this.win.user_name = item.user_name
        this.win.app_name = item.app_name
        this.win.prize = item.prize
        this.win.plan_test = item.plan_test
        this.dialogShow = true
      },
      async Update () {
        this.updateWin({
          id: this.win.id,
          prize: this.win.prize,
          plan_test: this.win.plan_test,
        }).then(() => {
          this.dialogShow = false
          this.alert = true
          this.textAlert = 'Cập nhật dữ liệu thành công!'

          this.initialize()
        }).catch(err => {
          console.log(err)
        })
      },
      confirmDelete (id) {
        this.win.id = id
        this.dialogDelete = true
      },
      async Delete () {
        this.deleteWin(this.win.id).then(() => {
          this.dialogDelete = false
          this.alert = true
          this.textAlert = 'Xóa dữ liệu thành công!'

          this.initialize()
        }).catch(err => {
          console.log(err)
        })
      },
    },

  }
</script>
