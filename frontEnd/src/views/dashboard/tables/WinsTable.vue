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
          icon="mdi-counter"
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
          :items="wins"
          :search="search"
        >
          <template v-slot:item.action="{ item }">
            <popup-win :item="item" />
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
    name: 'Wins',
    components: {
      PopupWin: () => import('../popup/Win'),
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
          { text: 'Tên người dùng', value: 'user_name' },
          { text: 'Tên ứng dụng', value: 'app_name' },
          { text: 'Giải thưởng', value: 'prize' },
          { text: 'Kế hoạch kiểm tra', value: 'plan_test' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        wins: [],
        dialog: false,
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        getWins: 'getWins',
      }),

      initialize () {
        this.getWins().then(res => {
          this.wins = res.data.content.data
        }).catch(err => {
          console.log(err)
        })
      },

      editUser () {

      },
    },

  }
</script>
