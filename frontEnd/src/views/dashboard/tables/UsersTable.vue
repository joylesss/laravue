<template>
  <div>
    <div class="custom-alert">
      <v-container
        id="regular-tables"
        fluid
        tag="section"
      >
        <v-card>
          <base-material-card
            icon="mdi-account-group"
            title=""
            class="px-5 py-3"
          />
          <v-card-title>
            <v-row>
              <v-col
                cols="2"
                sm="8"
              />
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
            :items="users"
            :search="search"
          >
            <template v-slot:item.action="{item}">
              <v-icon
                small
                class="mr-2"
                @click="editUser(item)"
                v-text="'$vuetify.icons.playlistEdit'"
              />
              <v-icon
                small
                class="mr-2"
                @click="confirmDelete(item.id)"
                v-text="'$vuetify.icons.trashCanOutline'"
              />
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </div>
    <div class="">
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
                    Chỉnh sửa thông tin người sử dụng
                  </div>
                </template>

                <v-form>
                  <v-container class="py-0">
                    <v-row>
                      <input
                        v-model="user.id"
                        type="hidden"
                        name="id"
                      >
                      <v-col
                        cols="12"
                        md="4"
                      >
                        <v-text-field
                          v-model="user.user_name"
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
                          v-model="user.phone"
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
                          v-model="user.fb_id"
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
                          v-model="user.fb_email"
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
    name: 'Users',
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
          { text: 'Tên người dùng', value: 'user_name' },
          { text: 'Số điện thoại', value: 'phone' },
          { text: 'Facebook ID', value: 'fb_id' },
          { text: 'Thư điện tử', value: 'fb_email' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        users: [],
        user: {
          id: '',
          user_name: '',
          phone: '',
          fb_id: '',
          fb_email: '',
        },
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
        getUsers: 'getUsers',
        updateUser: 'updateUser',
        deleteUser: 'deleteUser',
      }),

      initialize () {
        this.getUsers().then(res => {
          this.users = res.data.content
        }).catch(err => {
          console.log(err)
        })
      },

      editUser (item) {
        this.user.id = item.id
        this.user.user_name = item.user_name
        this.user.phone = item.phone
        this.user.fb_id = item.fb_id
        this.user.fb_email = item.fb_email
        this.dialog = true
      },
      confirmDelete (id) {
        this.user.id = id
        this.dialogDelete = true
      },
      async Update () {
        this.updateUser({
          id: this.user.id,
          user_name: this.user.user_name,
          phone: this.user.phone,
          fb_email: this.user.fb_email,
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
        this.deleteUser(this.user.id).then(res => {
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
