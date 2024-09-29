<template lang="pug">
.brands-logo
  .container
    .row.justify-content-around.align-items-center.py-4
      .col-lg-2.col-md-4.col-sm-6.mb-3.mb-lg-0
        img.img-fluid(:src="brandLogo1" :alt="brandLogo1AltText")
      .col-lg-2.col-md-4.col-sm-6.mb-3.mb-lg-0
        img.img-fluid(:src="brandLogo2" :alt="brandLogo2AltText")
      .col-lg-2.col-md-4.col-sm-6.mb-3.mb-lg-0
        img.img-fluid(:src="brandLogo3" :alt="brandLogo3AltText")
      .col-lg-2.col-md-4.col-sm-6.mb-3.mb-lg-0
        img.img-fluid(:src="brandLogo4" :alt="brandLogo4AltText")
      .col-lg-2.col-md-4.col-sm-6.mb-3.mb-lg-0
        img.img-fluid(:src="brandLogo5" :alt="brandLogo5AltText")
</template>

<script setup lang="ts">
import brandLogo1 from '@/assets/brands/versace.png'
import brandLogo2 from '@/assets/brands/zara.png'
import brandLogo3 from '@/assets/brands/gucci.png'
import brandLogo4 from '@/assets/brands/prada.png'
import brandLogo5 from '@/assets/brands/calvin-klein.png'

const brandLogo1AltText = 'Versace'
const brandLogo2AltText = 'Zara'
const brandLogo3AltText = 'Gucci'
const brandLogo4AltText = 'Prada'
const brandLogo5AltText = 'Calvin Klein'
</script>

<style scoped lang="scss">
.brands-logo {
  background-color: $secondary-color;
}
</style>
