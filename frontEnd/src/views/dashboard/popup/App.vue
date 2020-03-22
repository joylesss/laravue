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
        @click="showApp( item )"
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
                Chỉnh sửa thông tin ứng dụng
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
                    md="6"
                  >
                    <v-text-field
                      v-model="app_name"
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
                      v-model="version_ios"
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
                      v-model="version_android"
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
                      v-model="prize"
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
                      v-model="plan_test"
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
                      v-model="plan_show_win"
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
        version_ios: '',
        version_android: '',
        prize: '',
        plan_test: '',
        plan_show_win: '',
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        updateApp: 'updateApp',
      }),

      initialize () {

      },

      showApp (item) {
        this.id = item.id
        this.app_name = item.app_name
        this.version_ios = item.version_ios
        this.version_android = item.version_android
        this.prize = item.prize
        this.plan_test = item.plan_test
        this.plan_show_win = item.plan_show_win
      },

      async Update () {
        this.updateApp({
          id: this.id,
          app_name: this.app_name,
          version_ios: this.version_ios,
          version_android: this.version_android,
          prize: this.prize,
          plan_test: this.plan_test,
          plan_show_win: this.plan_show_win,
        }).then(res => {
          this.dialog = false
        }).catch(err => {
          console.log(err)
        })
      },

    },
  }
</script>
