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
          icon="mdi-scoreboard"
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
          :items="scores"
          :search="search"
        >
          <template v-slot:item.action="{ item }">
            <popup-score :item="item" />
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
    name: 'Scores',
    components: {
      PopupScore: () => import('../popup/Score'),
      ConfirmDelete: () => import('../popup/ConfirmDelete'),
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
          { text: 'Điểm số', value: 'point' },
          { text: 'Thời gian chơi', value: 'play_times' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        scores: [],
        dialog: false,
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        getScores: 'getScores',
      }),

      initialize () {
        this.getScores().then(res => {
          this.scores = res.data.content.data
        }).catch(err => {
          console.log(err)
        })
      },

      editUser () {

      },
    },

  }
</script>
