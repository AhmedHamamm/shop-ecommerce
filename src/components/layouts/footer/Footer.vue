<template lang="pug">
  .footer.py-5
    .container
      .row
        .col-md-12.col-lg-3
          FooterLogo
        .col-md-12.col-lg-9
          FooterLinks
      hr.footer-divider
      FooterBottom
</template>

<script setup lang="ts">
import FooterLogo from './FooterLogo.vue'
import FooterLinks from './FooterLinks.vue'
import FooterBottom from './FooterBottom.vue'
</script>

<style lang="scss">
.footer {
  background-color: $primary-color;
  a {
    text-decoration: none;
    color: $secondary-color;
  }
}
</style>
