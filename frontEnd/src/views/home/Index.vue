<template>
  <v-app>
    <dashboard-core-view />
  </v-app>
</template>

<script>
  export default {
    name: 'HomeIndex',

    components: {
      DashboardCoreView: () => import('./core/View'),
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>
