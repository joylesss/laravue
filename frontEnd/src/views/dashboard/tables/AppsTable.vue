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
            icon="mdi-apps"
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
            :items="apps"
            :search="search"
          >
            <template v-slot:item.action="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editApp( item )"
                v-text="'$vuetify.icons.playlistEdit'"
              />
              <v-icon
                small
                class="mr-2"
                @click="confirmApp( item.id )"
                v-text="'$vuetify.icons.trashCanOutline'"
              />
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </div>
    <div>

      <v-dialog
        v-model="dialogCreate"
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
                    Tạo mới thông tin ứng dụng
                  </div>
                </template>

                <v-form>
                  <v-container class="py-0">
                    <v-row>
                      <input
                        v-model="app.id"
                        type="hidden"
                        name="id"
                      >
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.app_name"
                          class="purple-input"
                          label="Tên ứng dụng"
                          name="app_name"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.version_ios"
                          class="purple-input"
                          label="Phiên bản ios"
                          name="version_ios"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.version_android"
                          class="purple-input"
                          label="Phiên bản android"
                          name="version_android"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.prize"
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
                          v-model="app.plan_test"
                          class="purple-input"
                          label="Kế hoạch kiểm tra"
                          name="plan_test"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.plan_show_win"
                          class="purple-input"
                          label="Kế hoạch chiến thắng"
                          name="plan_show_win"
                        />
                      </v-col>

                      <v-col
                        cols="6"
                        class="text-left"
                      >
                        <v-btn
                          color="warning"
                          class="mr-0"
                          @click="dialogCreate = false"
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
                          @click="Create"
                        >
                          Tạo mới
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
        v-model="dialog"
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
                    Chỉnh sửa thông tin ứng dụng
                  </div>
                </template>

                <v-form>
                  <v-container class="py-0">
                    <v-row>
                      <input
                        v-model="app.id"
                        type="hidden"
                        name="id"
                      >
                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.app_name"
                          class="purple-input"
                          label="Tên ứng dụng"
                          name="app_name"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.version_ios"
                          class="purple-input"
                          label="Phiên bản ios"
                          name="version_ios"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.version_android"
                          class="purple-input"
                          label="Phiên bản android"
                          name="version_android"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.prize"
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
                          v-model="app.plan_test"
                          class="purple-input"
                          label="Kế hoạch kiểm tra"
                          name="plan_test"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="app.plan_show_win"
                          class="purple-input"
                          label="Kế hoạch chiến thắng"
                          name="plan_show_win"
                        />
                      </v-col>

                      <v-col
                        cols="6"
                        class="text-left"
                      >
                        <v-btn
                          color="warning"
                          class="mr-0"
                          @click="dialog = false"
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
    name: 'Apps',
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
          { text: 'Tên ứng dụng', value: 'app_name' },
          { text: 'Phiên bản ios', value: 'version_ios' },
          { text: 'Phiên bản android', value: 'version_android' },
          { text: 'Giải thưởng', value: 'prize' },
          { text: 'Kế hoạch kiểm tra', value: 'plan_test' },
          { text: 'Kế hoạch chiến thắng', value: 'plan_show_win' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        apps: [],
        app: {
          id: '',
          app_name: '',
          version_ios: '',
          version_android: '',
          prize: '',
          plan_test: '',
          plan_show_info: '',
        },
        dialogCreate: false,
        dialog: false,
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
        getApps: 'getApps',
        createApp: 'createApp',
        updateApp: 'updateApp',
        deleteApp: 'deleteApp',
      }),

      initialize () {
        this.getApps().then(res => {
          this.apps = res.data.content.data
        }).catch(err => {
          console.log(err)
        })
      },

      editApp (item) {
        this.app.id = item.id
        this.app.app_name = item.app_name
        this.app.version_ios = item.version_ios
        this.app.version_android = item.version_android
        this.app.prize = item.prize
        this.app.plan_test = item.plan_test
        this.app.plan_show_win = item.plan_show_win
        this.dialog = true
      },
      confirmApp (id) {
        this.app.id = id
        this.dialogDelete = true
      },
      async Create () {
        this.createApp({
          name: this.app.app_name,
          version_ios: this.app.version_ios,
          version_android: this.app.version_android,
          prize: this.app.prize,
          plan_test: this.app.plan_test,
          plan_show_win: this.app.plan_show_win,
        }).then(res => {
          this.dialogCreate = false
          this.alert = true
          this.textAlert = 'Tạo mới dữ liệu thành công!'

          this.initialize()
        }).catch(err => {
          console.log(err)
        })
      },
      async Update () {
        this.updateApp({
          id: this.app.id,
          app_name: this.app.app_name,
          version_ios: this.app.version_ios,
          version_android: this.app.version_android,
          prize: this.app.prize,
          plan_test: this.app.plan_test,
          plan_show_win: this.app.plan_show_win,
        }).then(res => {
          this.dialog = false
          this.alert = true
          this.textAlert = 'Cập nhật dữ liệu thành công!'

          this.initialize()
        }).catch(err => {
          console.log(err)
        })
      },
      async Delete () {
        this.deleteApp(this.app.id).then(res => {
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
