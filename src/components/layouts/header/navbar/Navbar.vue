<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.bg-white.p-2
  .container
    button.navbar-toggler.me-3.border-0(
      type="button"
      @click="toggleNav"
      aria-controls="navbarNav"
      :aria-expanded="isNavOpen"
      aria-label="Toggle navigation"
    )
      i.bx(:class="isNavOpen ? 'bx-x' : 'bx-menu'")
    RouterLink.navbar-brand.fw-bold.fs-2(to="/") SHOP.CO
    .d-sm-flex.ms-auto.d-lg-none
      UserActions
    #navbarNav.collapse.navbar-collapse.gap-5.d-lg-flex(:class="{ show: isNavOpen }")
      NavbarLinks
      SearchForm
    .d-none.d-lg-flex.ms-auto
      UserActions
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

// Components
import SearchForm from './SearchForm.vue'
import NavbarLinks from './NavbarLinks.vue'
import UserActions from './UserActions.vue'

// Toggle navbar
const isNavOpen = ref(false)
const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
}

// Close navbar on window resize
const handleResize = () => {
  if (window.innerWidth >= 992) {
    isNavOpen.value = false
  }
}

// Add event listener on window resize
onMounted(() => {
  window.addEventListener('resize', handleResize)
})
// Remove event listener on window resize
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.navbar {
  border-bottom: 1px solid $shadow-color;
  box-shadow: 0 2px 4px $shadow-color;
}
</style>
