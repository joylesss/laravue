<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="290"
  >
    <template v-slot:activator="{ on }">
      <v-icon
        small
        class="mr-2"
        @click="deleteUser( item )"
        v-on="on"
        v-text="'$vuetify.icons.trashCanOutline'"
      />
    </template>
    <v-card>
      <v-card-title class="headline">
        Bạn có chắc chắn?
      </v-card-title>
      <v-card-text>Dữ liệu xóa sẽ không thể khôi phục lại!</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Không đồng ý
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          Đồng ý
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
