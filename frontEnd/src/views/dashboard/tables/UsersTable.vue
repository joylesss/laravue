<template>
  <div>
    <v-container
      id="regular-tables"
      fluid
      tag="section"
    >
      <!--<base-v-component
      heading="Users"
      link="components/simple-tables"
    />-->

      <v-card>
        <base-material-card
          icon="mdi-account-group"
          title=""
          class="px-5 py-3"
        />
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Tìm kiếm ..."
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
        >
          <template v-slot:item.action="{ item }">
            <popup-user :item="item" />
            <confirm-delete :id="item.id" />
          </template>
        </v-data-table>
      </v-card>
    </v-container>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Users',
    components: {
      PopupUser: () => import('../popup/User'),
      ConfirmDelete: () => import('../popup/ConfirmDelete'),
    },

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
        editedIndex: -1,
        editedItem: [

        ],
        dialog: false,
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        getUsers: 'getUsers',
      }),

      initialize () {
        this.getUsers().then(res => {
          this.users = res.data.content.data
        }).catch(err => {
          console.log(err)
        })
      },

      editUser (item) {
        console.log(item)
      },
    },

  }
</script>
