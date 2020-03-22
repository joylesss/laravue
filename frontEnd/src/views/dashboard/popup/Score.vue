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
        @click="showScore( item )"
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
                Chỉnh sửa thông tin điểm số
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
                    md="4"
                  >
                    <v-text-field
                      v-model="user_name"
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
                      v-model="app_name"
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
                      v-model="point"
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
                      v-model="play_times"
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
        user_name: '',
        app_name: '',
        point: '',
        play_times: '',
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        updateScore: 'updateScore',
      }),

      initialize () {

      },

      showScore (item) {
        this.id = item.id
        this.user_name = item.user_name
        this.app_name = item.app_name
        this.point = item.point
        this.play_times = item.play_times
      },

      async Update () {
        this.updateScore({
          id: this.id,
          point: this.point,
          play_times: this.play_times,
        }).then(res => {
          this.dialog = false
        }).catch(err => {
          console.log(err)
        })
      },

    },
  }
</script>
