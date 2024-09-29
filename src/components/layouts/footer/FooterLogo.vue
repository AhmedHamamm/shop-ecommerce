<!-- src/components/layouts/footer/FooterLogo.vue -->
<template lang="pug">
    RouterLink(to="/")
      h3.fw-bold.text-black.text-decoration-none {{ logo }}
    p.text-muted.my-4 {{ slogan }}
    .social-icons.d-flex.gap-3
      RouterLink(to="/")
        i.bx.bxl-twitter
      RouterLink(to="/")
        i.bx.bxl-facebook
      RouterLink(to="/")
        i.bx.bxl-instagram
      RouterLink(to="/")
        i.bx.bxl-github
</template>

<script setup lang="ts">
import { ref } from 'vue'

const logo = ref('SHOP.CO')
const slogan = ref(
  "We have clothes that suits your style and which you're proud to wear. From women to men."
)
</script>

<style scoped lang="scss">
.social-icons a {
  font-size: 1.5rem;
  transition:
    opacity var(--transition-speed) ease,
    transform var(--transition-speed) ease;
}

.social-icons a:hover {
  opacity: 0.8;
  transform: scale(1.1);
}
</style>
