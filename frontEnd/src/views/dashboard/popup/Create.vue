<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
      >Tạo mới</v-btn>
    </template>
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

              <div class="subtitle-1 font-weight-light">
                Complete your profile
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
                      :items="items_app"
                      label="Tên ứng dụng"
                    ></v-select>
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="details"
                      class="purple-input"
                      label="Câu hỏi"
                      name="details"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="a"
                      class="purple-input"
                      label="Đáp án A"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="b"
                      class="purple-input"
                      label="Đáp án B"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="c"
                      class="purple-input"
                      label="Đáp án C"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="d"
                      class="purple-input"
                      label="Đáp án D"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-select
                      :items="items_answer"
                      label="Câu trả lời"
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
                      @click="Create"
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
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['item'],

    data () {
      return {
        dialog: false,
        items_app: ['Nhanh Như Chớp', 'Luyện Nghe Tiếng Anh', 'Ai Là Triệu Phú'],
        items_answer: ['A', 'B', 'C', 'D'],
        /* Form info data */
        id: '',
        app_id: '',
        details: '',
        a: '',
        b: '',
        c: '',
        d: '',
        answer: '',
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        createQuestion: 'createQuestion',
      }),

      initialize () {

      },

      async Create () {
        this.createQuestion({
          app_id: this.app_id,
          details: this.details,
          a: this.a,
          b: this.b,
          c: this.c,
          d: this.d,
          answer: this.answer,
        }).then(res => {
          this.dialog = false
        }).catch(err => {
          console.log(err)
        })
      },

    },
  }
</script>
