<template lang="pug">
.signup-banner.sticky-top.bg-black.text-white.py-2
  .container.d-flex.align-items-center.justify-content-between
    .wrapper.text-center.m-auto
      span.navbar-text.mb-0.text-white-50.fs-6 {{ title }}
      a.text-white.text-decoration-underline.fs-6(href="#") Sign Up Now
    button.btn-close.btn-close-white(@click="closeBanner" aria-label="Close")
</template>

<script setup lang="ts">
const title = 'Sign up and get 20% off to your first order.'

const closeBanner = () => {
  document.querySelector('.signup-banner')?.remove()
}
</script>
