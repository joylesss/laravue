<template>
  <div>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="480px"
    >
      <template v-slot:activator="{ on }">
        <v-icon
          small
          class="mr-2"
          v-on="on"
          v-text="'$vuetify.icons.trashCanOutline'"
        />
      </template>
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
                    color="error"
                    class="mr-0 text-right"
                    @click="Delete(id)"
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
    <div class="text-center">
      <v-bottom-sheet
        v-model="alert"
        inset
      >
          <v-alert
            v-model="alert"
            dismissible
            color="color"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-twitter"
            text="text"
          >
<!--            You've got <strong>5</strong> new updates on your timeline!.-->
          </v-alert>
      </v-bottom-sheet>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'

  export default {

    name: 'ConfirmDelete',
    components: {
      // AlertSuccess: () => import('../popup/AlertSuccess'),
    },
    props: ['id'],

    data () {
      return {
        dialog: false,
        alert: false,
        color: '',
        text: '',
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        deleteUser: 'deleteUser',
      }),

      initialize () {

      },

      async Delete (id) {
        this.deleteUser(id).then(res => {
          this.dialog = false
        }).catch(err => {
          this.text = 'anvcx'
          this.color = 'pink'
          this.alert = true
          console.log(err)
        })
      },

    },
  }
</script>
