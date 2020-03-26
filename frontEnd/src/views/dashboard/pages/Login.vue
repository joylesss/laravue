<template>
  <div class="form-login custom-alert">
    <v-app id="">
      <v-content>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="10"
              sm="6"
              md="4"
            >
              <v-card>
                <base-material-card
                  icon="mdi-account-tie"
                />
                <v-card class="">
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        v-model="fb_email"
                        :rules="fb_emailRules"
                        label="Thư điện tử"
                        name="fb_email"
                        prepend-icon="mdi-account"
                        type="email"
                      />

                      <v-text-field
                        id="password"
                        v-model="password"
                        :rules="passwordRules"
                        label="Mật khẩu"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                      />
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer />
                    <v-btn
                      color="primary"
                      @click="Login"
                    >
                      Đăng nhập
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>

    <div class="">
      <v-bottom-sheet
        v-model="alert"
        inset
      >
        <v-alert
          v-model="alert"
          dismissible
          color="error"
          border="left"
          elevation="2"
          colored-border
          icon="mdi-alert"
          width="320"
        >
          {{textAlert}}
        </v-alert>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    components: {

    },
    data () {
      return {
        fb_email: '',
        fb_emailRules: [
          v => !!v || 'Thư điện tử là bắt buộc',
          v => /.+@.+\..+/.test(v) || 'Thư điện tử phải hợp lệ',
        ],
        password: '',
        passwordRules: [
          v => !!v || 'Mật khẩu là bắt buộc',
        ],
        alert: false,
        textAlert: '',
      }
    },

    methods: {
      ...mapActions({
        login: 'login',
      }),

      async Login () {
        this.login({
          fb_email: this.fb_email,
          password: this.password,
        }).then(() => {
          this.$router.replace({
            path: '/admin',
          })
        }).catch(() => {
          this.alert = true
          this.textAlert = 'Tài khoản và mật khẩu không chính xác!'
        })
      },
    },
  }
</script>
