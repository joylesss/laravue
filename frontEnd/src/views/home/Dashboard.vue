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
          class="position-link-img fill-height"
          align="center"
          justify="center"
        >
          <v-img
            class="text-img-center"
            :src="require('@/assets/thanhtienganh.png')"
          />
          <a
            class="link-app"
            target="blank"
            href="https://apps.apple.com/us/app/th%C3%A1nh-nghe-ti%E1%BA%BFng-anh/id1504696758?ls=1&fbclid=IwAR3c3UEtRMMOnlugvrzplQWaib832IuDkNRn53bOhbHKtpJ8ytzzTSoG7FI"
          />
          <a
            class="link-app link-android"
            target="blank"
            href="https://play.google.com/store/apps/details?id=com.quanth.learnenglish&fbclid=IwAR0H7jj4mM4vyDfhAX2LoSTuaFYRroBP2cOzOnE7z1h133XqwXv5a2qRUVg"
          />
          <a
            class="link-fb link-admin"
            target="blank"
            href="http://giaithuong.top/#/admin"
          />
          <a
            class="link-fb"
            target="blank"
            href="https://www.facebook.com/hocchoivuicothuong"
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
