<template>
  <!--  <v-card class="d-inline-block mx-auto">-->
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="2"
        lg="2"
        class="text-center"
      >
        <v-row
          class=""
        >
          <v-col class="px-0">
            <v-img
              class="text-img-center"
              width="288"
              :src="require('@/assets/app_ios.png')"
            />
          </v-col>

          <v-col class="px-0">
            <v-img
              class="text-img-center"
              width="288"
              :src="require('@/assets/app_android.png')"
            />
          </v-col>

          <v-col class="px-0">
            <v-img
              class="text-img-center"
              width="288"
              :src="require('@/assets/code.png')"
            />
          </v-col>

          <v-col class="px-0">
            <v-img
              class="text-img-center"
              width="288"
              :src="require('@/assets/millionaire.png')"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="4"
        lg="4"
      >
        <v-img
          class="text-img-center"
          width="288"
          height="567"
          :src="require('@/assets/UIHere.png')"
        />
      </v-col>

      <v-col
        cols="12"
        sm="4"
        lg="4"
      >
        <v-img
          class="text-img-center"
          width="288"
          height="567"
          :src="require('@/assets/UIHere.png')"
        />
      </v-col>
      <v-col
        cols="12"
        sm="2"
        lg="2"
        class="text-center"
      >
        <v-row
          class=""
        >
          <v-col class="px-0">
            <v-img
              class="text-img-center"
              width="288"
              :src="require('@/assets/app_ios.png')"
            />
          </v-col>

          <v-col class="px-0">
            <v-img
              class="text-img-center"
              width="288"
              :src="require('@/assets/app_android.png')"
            />
          </v-col>

          <v-col class="px-0">
            <v-img
              class="text-img-center"
              width="288"
              :src="require('@/assets/code.png')"
            />
          </v-col>

          <v-col class="px-0">
            <v-img
              class="text-img-center"
              width="288"
              :src="require('@/assets/millionaire.png')"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
<!--  </v-card>-->
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {}
    },

    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
    },
  }
</script>
