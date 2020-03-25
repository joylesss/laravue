<template>
  <div>
    <v-alert
      v-model="alert"
      dismissible
      color="cyan"
      border="left"
      elevation="2"
      colored-border
      icon="mdi-twitter"
    >
      You've got <strong>5</strong> new updates on your timeline!.
    </v-alert>
  </div>
</template>
<script>
  export default {
    props: ['res'],

    data () {
      return {
        alert: res,
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      initialize () {
        console.log(this.alert)
      },
    },
  }
</script>
