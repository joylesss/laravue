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
            icon="mdi-forum"
            title=""
            class="px-5 py-3"
          />
          <v-card-title>
            <v-row>
              <v-col
                cols="2"
                sm="1"
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
                cols="2"
                sm="4"
              >
                <v-select
                  v-model="search"
                  :items="search_name"
                  label="Tìm kiếm theo tên App"
                  name="app_name"
                />
              </v-col>
              <v-col
                cols="10"
                sm="3"
              >
              </v-col>
              <v-col
                cols="10"
                sm="4"
                class="cus-search"
              >
              </v-col>
            </v-row>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="questions"
            :search="search"
          >
            <template v-slot:item.action="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="editQuestion( item )"
                v-text="'$vuetify.icons.playlistEdit'"
              />
              <v-icon
                small
                class="mr-2"
                @click="confirmQuestion( item.id )"
                v-text="'$vuetify.icons.trashCanOutline'"
              />
            </template>
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
                    Chỉnh sửa thông tin câu hỏi
                  </div>
                </template>

                <v-form>
                  <v-container class="py-0">
                    <v-row>
                      <input
                        v-model="question.id"
                        type="hidden"
                        name="id"
                      >
                      <v-col
                        cols="12"
                        md="12"
                      >
                        <v-text-field
                          v-model="question.app_name"
                          class="purple-input"
                          label="Tên ứng dụng"
                          name="app_name"
                          disabled
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.details"
                          outlined
                          rows="4"
                          label="Câu hỏi"
                          name="details"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.a"
                          outlined
                          rows="4"
                          label="Đáp án A"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.b"
                          outlined
                          rows="4"
                          label="Đáp án B"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.c"
                          outlined
                          rows="4"
                          label="Đáp án C"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.d"
                          outlined
                          rows="4"
                          label="Đáp án D"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.answer"
                          outlined
                          rows="4"
                          label="Câu trả lời"
                        ></v-textarea>
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
                    Tạo mới thông tin câu hỏi
                  </div>
                </template>

                <v-form>
                  <v-container class="py-0">
                    <v-row>
                      <v-col
                        cols="12"
                        md="12"
                      >
                        <v-select
                          v-model="question.app_name"
                          :items="items_app"
                          label="Tên ứng dụng"
                          name="app_name"
                        />
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.details"
                          outlined
                          rows="4"
                          label="Câu hỏi"
                          name="details"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.a"
                          outlined
                          rows="4"
                          label="Đáp án A"
                          name="a"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.b"
                          outlined
                          rows="4"
                          label="Đáp án B"
                          name="b"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.c"
                          outlined
                          rows="4"
                          label="Đáp án C"
                          name="c"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.d"
                          outlined
                          rows="4"
                          label="Đáp án D"
                          name="d"
                        ></v-textarea>
                      </v-col>

                      <v-col
                        cols="12"
                        md="6"
                      >
                        <v-textarea
                          v-model="question.answer"
                          outlined
                          rows="4"
                          label="Câu trả lời"
                          name="answer"
                        ></v-textarea>
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
    name: 'Questions',
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
          { text: 'Câu hỏi', value: 'details' },
          { text: 'Đáp án A', value: 'a' },
          { text: 'Đáp án B', value: 'b' },
          { text: 'Đáp án C', value: 'c' },
          { text: 'Đáp án D', value: 'd' },
          { text: 'Câu trả lời', value: 'answer' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        questions: [],
        question: {
          id: '',
          app_name: '',
          details: '',
          a: '',
          b: '',
          c: '',
          d: '',
          answer: '',
        },
        dialogCreate: false,
        dialog: false,
        dialogDelete: false,
        alert: false,
        textAlert: '',
        items_app: [],
        search_name: [],
        items_answer: ['A', 'B', 'C', 'D'],
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        getQuestions: 'getQuestions',
        createQuestion: 'createQuestion',
        updateQuestion: 'updateQuestion',
        deleteQuestion: 'deleteQuestion',
        getAppName: 'getAppName',
      }),

      initialize () {
        this.getQuestions().then(res => {
          this.questions = res.data.content
        }).catch(err => {
          console.log(err)
        })
        this.getAppName().then(res => {
          const searchName = [''].concat(res.data.content)
          this.search_name = searchName
          this.items_app = res.data.content
        }).catch(err => {
          console.log(err)
        })
        this.question.app_name = ''
        this.question.details = ''
        this.question.a = ''
        this.question.b = ''
        this.question.c = ''
        this.question.d = ''
        this.question.answer = ''
      },

      Create () {
        this.createQuestion({
          app_name: this.question.app_name,
          details: this.question.details,
          a: this.question.a,
          b: this.question.b,
          c: this.question.c,
          d: this.question.d,
          answer: this.question.answer,
        }).then(() => {
          this.dialogCreate = false
          this.alert = true
          this.textAlert = 'Tạo mới dữ liệu thành công!'

          this.initialize()
        }).catch(() => {
          this.alert = true
          this.textAlert = 'Tạo mới dữ liệu thất bại!'
        })
      },
      editQuestion (item) {
        this.question.id = item.id
        this.question.app_name = item.app_name
        this.question.details = item.details
        this.question.a = item.a
        this.question.b = item.b
        this.question.c = item.c
        this.question.d = item.d
        this.question.answer = item.answer
        this.dialog = true
      },
      confirmQuestion (id) {
        this.question.id = id
        this.dialogDelete = true
      },
      async Update () {
        this.updateQuestion({
          id: this.question.id,
          details: this.question.details,
          a: this.question.a,
          b: this.question.b,
          c: this.question.c,
          d: this.question.d,
          answer: this.question.answer,
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
        this.deleteQuestion(this.question.id).then(res => {
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
