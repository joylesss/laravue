<template>
  <v-carousel
    class="cus-carousel"
    cycle
    height="100%"
    hide-delimiter-background
    show-arrows-on-hover
    show-arrows="false"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <v-img
            class="text-img-center"
            :src="require('@/assets/thanhtienganh.png')"
          />
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          'white',
        ],
        slides: [
          'First',
        ],
      }
    },
  }
</script>
