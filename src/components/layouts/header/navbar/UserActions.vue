<template lang="pug">
button.btn.me-2(type="button")
  i.bx.bx-search
RouterLink(to="/cart")
  button.btn.me-2(type="button")
    i.bx.bx-cart
    span.badge.bg-danger.rounded-pill.ms-1(v-if="cartStore.totalItems > 0") {{ cartStore.totalItems }}
button.btn(type="button")
  i.bx.bx-user
</template>

<script setup lang="ts">
import { useCartStore } from '@/components/cart/CartStore.vue'

const cartStore = useCartStore()
</script>

<style scoped lang="scss">
button {
  i {
    font-size: 1.5rem;
    transition: color 0.3s ease;
    &:hover {
      scale: 1.2;
      color: $secondary-color;
    }
  }
}
</style>
