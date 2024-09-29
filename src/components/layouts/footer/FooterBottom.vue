<!-- src/components/layouts/footer/FooterBottom.vue -->
<template lang="pug">
  .d-flex.justify-content-between.align-items-center.pt-3.row
    .text-center.text-lg-start.col-12.col-lg-6
      p Shop.co © 2000-2024, All Rights Reserved
    .d-flex.gap-3.flex-wrap.col-12.col-lg-6.justify-content-center.justify-content-lg-end
      img(v-for="(paymentMethod, index) in paymentMethods" :src="paymentMethod.img" :alt="paymentMethod.alt")
</template>

<script setup lang="ts">
import visa from '@/assets/payment-methods/visa.png'
import mastercard from '@/assets/payment-methods/mastercard.png'
import paypal from '@/assets/payment-methods/paypal.png'
import aPay from '@/assets/payment-methods/a-pay.png'
import gPay from '@/assets/payment-methods/g-pay.png'

const paymentMethods = [
  {
    img: visa,
    alt: 'Visa'
  },
  {
    img: mastercard,
    alt: 'Mastercard'
  },
  {
    img: paypal,
    alt: 'PayPal'
  },
  {
    img: aPay,
    alt: 'Apple Pay'
  },
  {
    img: gPay,
    alt: 'Google Pay'
  }
]
</script>

<style scoped lang="scss">
img {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
}
</style>
