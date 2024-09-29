<template lang="pug">
  .container
    Breadcrumb(:breadcrumbs="breadcrumbs")
    h2 Your cart
    .row.mb-5
      .col-md-8
        CartItems(:products="cartStore.cartItems")
      .col-md-4
        CartSummary
</template>

<script setup lang="ts">
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import CartItems from '@/components/cart/CartItems.vue'
import CartSummary from '@/components/cart/CartSummary.vue'
import { useCartStore } from '@/components/cart/CartStore.vue'

const breadcrumbs = [
  { text: 'Home', href: '/' },
  { text: 'Cart', href: '#' }
]

const cartStore = useCartStore()
</script>
