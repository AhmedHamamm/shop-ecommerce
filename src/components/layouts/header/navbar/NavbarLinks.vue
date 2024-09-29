<template lang="pug">
ul.navbar-nav.me-auto.mb-2.mb-lg-0
  li.nav-item(v-for="link in links" :key="link.name")
    RouterLink.nav-link(:to="link.path") {{ link.name }}
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const links = ref([
  { name: 'Shop', path: '/' },
  { name: 'On Sale', path: '/' },
  { name: 'New Arrivals', path: '/' },
  { name: 'Brands', path: '/' }
])
</script>
