<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="600px"
  >
    <template v-slot:activator="{ on }">
      <v-icon
        small
        class="mr-2"
        @click="showQuestion( item )"
        v-on="on"
        v-text="'$vuetify.icons.playlistEdit'"
      />
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
                Chỉnh sửa thông tin người sử dụng
              </div>

              <div class="subtitle-1 font-weight-light">
                Complete your profile
              </div>
            </template>

            <v-form>
              <v-container class="py-0">
                <v-row>
                  <input
                    v-model="id"
                    type="hidden"
                    name="id"
                  >
                  <v-col
                    cols="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="app_name"
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
                    <v-text-field
                      v-model="answer"
                      class="purple-input"
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
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['item'],

    data () {
      return {
        dialog: false,
        /* Form info data */
        id: '',
        app_name: '',
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
        updateQuestion: 'updateQuestion',
      }),

      initialize () {

      },

      showQuestion (item) {
        this.id = item.id
        this.app_name = item.app_name
        this.details = item.details
        this.a = item.a
        this.b = item.b
        this.c = item.c
        this.d = item.d
        this.answer = item.answer
      },

      async Update () {
        this.updateQuestion({
          id: this.id,
          app_name: this.app_name,
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
