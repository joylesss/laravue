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
          icon="mdi-apps"
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
          :items="apps"
          :search="search"
        >
          <template v-slot:item.action="{ item }">
            <popup-app :item="item" />
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
    name: 'Apps',
    components: {
      PopupApp: () => import('../popup/App'),
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
          { text: 'Tên ứng dụng', value: 'app_name' },
          { text: 'Phiên bản ios', value: 'version_ios' },
          { text: 'Phiên bản android', value: 'version_android' },
          { text: 'Giải thưởng', value: 'prize' },
          { text: 'Kế hoạch kiểm tra', value: 'plan_test' },
          { text: 'Kế hoạch chiến thắng', value: 'plan_show_win' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        apps: [],
        dialog: false,
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        getApps: 'getApps',
      }),

      initialize () {
        this.getApps().then(res => {
          this.apps = res.data.content.data
        }).catch(err => {
          console.log(err)
        })
      },

      editUser () {

      },
    },

  }
</script>
