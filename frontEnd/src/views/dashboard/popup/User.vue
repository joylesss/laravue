<template>
  <div class="">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on }">
        <v-icon
          small
          class="mr-2"
          @click="showUser( item )"
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
                      md="4"
                    >
                      <v-text-field
                        v-model="user_name"
                        class="purple-input"
                        label="Tên người dùng"
                        name="user_name"
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-text-field
                        v-model="phone"
                        class="purple-input"
                        label="Số điện thoại"
                        name="phone"
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="fb_id"
                        class="purple-input"
                        label="Facebook ID"
                        disabled
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-text-field
                        v-model="fb_email"
                        class="purple-input"
                        label="Thư điện tử"
                        name="fb_email"
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
</template>
<script>
  import { mapActions } from 'vuex'

  export default {
    props: ['item'],

    data () {
      return {
        dialog: false,
        alert: false,
        /* Form info data */
        id: '',
        user_name: '',
        phone: '',
        fb_id: '',
        fb_email: '',
        textAlert: '',
      }
    },

    created () {
      this.fetchData()
    },

    methods: {
      ...mapActions({
        updateUser: 'updateUser',
      }),

      fetchData () {

      },

      showUser (item) {
        this.id = item.id
        this.user_name = item.user_name
        this.phone = item.phone
        this.fb_id = item.fb_id
        this.fb_email = item.fb_email
      },

      async Update () {
        this.updateUser({
          id: this.id,
          user_name: this.user_name,
          phone: this.phone,
          fb_email: this.fb_email,
        }).then(res => {
          this.dialog = false
          this.alert = true
          this.textAlert = 'Cập nhật dữ liệu thành công!'
          this.fetchData()
        }).catch(err => {
          console.log(err)
        })
      },

    },
  }
</script>
