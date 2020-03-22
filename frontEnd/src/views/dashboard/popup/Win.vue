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
        @click="showWin( item )"
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
                Chỉnh sửa thông tin người chiến thắng
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
                      name="user_name"
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
        prize: '',
        plan_test: '',
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        updateWin: 'updateWin',
      }),

      initialize () {

      },

      showWin (item) {
        this.id = item.id
        this.user_name = item.user_name
        this.app_name = item.app_name
        this.prize = item.prize
        this.plan_test = item.plan_test
      },

      async Update () {
        this.updateWin({
          id: this.id,
          user_name: this.user_name,
          app_name: this.app_name,
          prize: this.prize,
          plan_test: this.plan_test,
        }).then(res => {
          this.dialog = false
        }).catch(err => {
          console.log(err)
        })
      },

    },
  }
</script>
