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
            icon="mdi-scoreboard"
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
                  color="error"
                  @click="dialogDelete = true"
                >
                  <v-icon dark>
                    mdi-trash-can-outline
                  </v-icon>
                </v-btn>
              </v-col>
              <v-col
                cols="10"
                sm="4"
                class="cus-search"
              >
                <v-select
                  v-model="search"
                  :items="search_name"
                  label="Tìm kiếm"
                  name="app_name"
                />
              </v-col>
            </v-row>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="scores"
            item-key="id"
            :search="search"
          >
            <template v-slot:body="{ items }">
              <tbody>
              <tr
                v-for="item in items"
                :key="item.id"
              >
                <td>
                  <v-checkbox
                    v-model="selected"
                    :value="item.id"
                    hide-details
                    align="center"
                  />
                </td>
                <td align="center">{{ item.id }}</td>
                <td>{{ item.user_name }}</td>
                <td>{{ item.app_name }}</td>
                <td>{{ item.point }}</td>
                <td>{{ item.play_times }}</td>
                <td>
                  <v-icon
                    small
                    class="mr-2"
                    @click="show( item )"
                    v-text="'$vuetify.icons.playlistEdit'"
                  />
                </td>
              </tr>
              </tbody>
            </template>
            <!--<template v-slot:item.action="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="show( item )"
                v-text="'$vuetify.icons.playlistEdit'"
              />
            </template>-->
          </v-data-table>
        </v-card>
      </v-container>
    </div>
    <div>
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
                    Chỉnh sửa thông tin điểm số
                  </div>
                </template>

                <v-form>
                  <v-container class="py-0">
                    <v-row>
                      <input
                        v-model="score.id"
                        type="hidden"
                        name="id"
                      >
                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="score.user_name"
                          class="purple-input"
                          label="Tên người dùng"
                          disabled
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="score.app_name"
                          class="purple-input"
                          label="Tên ứng dụng"
                          disabled
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="score.point"
                          class="purple-input"
                          label="Giải thưởng"
                          name="point"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-text-field
                          v-model="score.play_times"
                          class="purple-input"
                          label="Thời gian chơi"
                          name="play_times"
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
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Scores',
    components: {},

    data () {
      return {
        search: '',
        selected: [],
        headers: [
          { text: '', sortable: false, value: '' },
          { text: '#ID', align: 'center', sortable: false, value: 'id' },
          { text: 'Tên người dùng', value: 'user_name' },
          { text: 'Tên ứng dụng', value: 'app_name' },
          { text: 'Điểm số', value: 'point' },
          { text: 'Thời gian chơi', value: 'play_times' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        scores: [],
        score: {
          id: '',
        },
        dialog: false,
        dialogDelete: false,
        alert: false,
        textAlert: '',
        search_name: [],
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        getScores: 'getScores',
        updateScore: 'updateScore',
        deleteScore: 'deleteScore',
        getAppName: 'getAppName',
      }),

      initialize () {
        this.getScores().then(res => {
          this.scores = res.data.content.data
        }).catch(err => {
          console.log(err)
        })
        this.getAppName().then(res => {
          const searchName = [''].concat(res.data.content)
          this.search_name = searchName
        }).catch(err => {
          console.log(err)
        })
        this.selected = []
      },

      show (item) {
        this.score.id = item.id
        this.score.user_name = item.user_name
        this.score.app_name = item.app_name
        this.score.point = item.point
        this.score.play_times = item.play_times
        this.dialog = true
      },
      async Update () {
        this.updateScore({
          id: this.score.id,
          point: this.score.point,
          play_times: this.score.play_times,
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
        this.deleteScore(this.selected).then(res => {
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
