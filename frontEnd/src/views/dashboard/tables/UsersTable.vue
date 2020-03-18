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
          title="Simple Table"
          class="px-5 py-3"
        />
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          />
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
        >
          <template v-slot:item.action="{}">
            <popup-user />
            <confirm-edit />
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
      ConfirmEdit: () => import('../popup/ConfirmEdit'),
    },

    data () {
      return {
        search: '',
        headers: [
          {
            text: '#ID',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Phone', value: 'phone' },
          { text: 'FB-ID', value: 'fb_id' },
          { text: 'FB-Email', value: 'fb_email' },
          { text: 'FB-Url', value: 'fb_url' },
          { text: 'Action', value: 'action', sortable: false },
        ],
        users: [],
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

      editUser () {

      },
    },

  }
</script>
