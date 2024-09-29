<template lang="pug">
  .row
    .col-6.col-lg-3
      h3.mb-4 Company
      ul.list-unstyled.d-flex.flex-column.gap-2
        li(v-for="link in companyLinks" :key="link.name")
          RouterLink(:to="link.to") {{ link.name }}
    .col-6.col-lg-3
      h3.mb-4 Help
      ul.list-unstyled.d-flex.flex-column.gap-2
        li(v-for="link in helpLinks" :key="link.name")
          RouterLink(:to="link.to") {{ link.name }}
    .col-6.col-lg-3
      h3.mb-4 FAQ
      ul.list-unstyled.d-flex.flex-column.gap-2
        li(v-for="link in faqLinks" :key="link.name")
          RouterLink(:to="link.to") {{ link.name }}
    .col-6.col-lg-3
      h3.mb-4 Resources
      ul.list-unstyled.d-flex.flex-column.gap-2
        li(v-for="link in resourcesLinks" :key="link.name")
          RouterLink(:to="link.to") {{ link.name }}
</template>

<script setup lang="ts">
import {
  companyLinks,
  helpLinks,
  faqLinks,
  resourcesLinks
} from '@/components/layouts/footer/FooterLinksData.vue'
</script>

<style scoped lang="scss">
a {
  color: $secondary-color;
  opacity: 0.5;
  font-size: 1rem;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
}
</style>
