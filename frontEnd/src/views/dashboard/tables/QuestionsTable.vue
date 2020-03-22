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
          icon="mdi-forum"
          title=""
          class="px-5 py-3"
        />
        <v-card-title>
          <create-question />
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
          :items="questions"
          :search="search"
        >
          <template v-slot:item.action="{ item }">
            <popup-question :item="item" />
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
      PopupQuestion: () => import('../popup/Question'),
      ConfirmEdit: () => import('../popup/ConfirmEdit'),
      createQuestion: () => import('../popup/Create'),
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
          { text: 'Câu hỏi', value: 'details' },
          { text: 'Đáp án A', value: 'a' },
          { text: 'Đáp án B', value: 'b' },
          { text: 'Đáp án C', value: 'c' },
          { text: 'Đáp án D', value: 'd' },
          { text: 'Câu trả lời', value: 'answer' },
          { text: '', value: 'action', sortable: false, align: 'center' },
        ],
        questions: [],
        dialog: false,
      }
    },

    created () {
      this.initialize()
    },

    methods: {
      ...mapActions({
        getQuestions: 'getQuestions',
        createQuestion: 'createQuestion',
      }),

      initialize () {
        this.getQuestions().then(res => {
          this.questions = res.data.content.data
        }).catch(err => {
          console.log(err)
        })
      },

      Create () {
        this.createQuestion({

        })
      },
    },

  }
</script>
