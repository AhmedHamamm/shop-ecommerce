<template lang="pug">
  .newsletter-section
    .container
      .newsletter-wrapper.p-5.rounded-5.text-white
        .row
          .col-12.col-md-6
            h2.mb-4.fw-bold {{ title }}
          .col-12.col-md-6.d-flex.flex-column.justify-content-center.align-items-end.gap-3
            .col-12.col-lg-8
              input.form-control.py-3.rounded-pill(type="email" :placeholder="inputPlaceholder")
            .col-12.col-lg-8
              WhiteBtn.w-100.rounded-pill.py-3(:buttonText="buttonText")
</template>

<script setup lang="ts">
import WhiteBtn from '@/components/common/WhiteBtn.vue'
import { ref } from 'vue'

const title = ref('STAY UPTO DATE ABOUT OUR LATEST OFFERS')
const buttonText = ref('Subscribe to Newsletter')
const inputPlaceholder = ref('Enter your email address')
</script>

<style scoped lang="scss">
.newsletter-section {
  background: linear-gradient(180deg, $tertiary-color 50%, $primary-color 50%);
  .newsletter-wrapper {
    background-color: $secondary-color;
    button {
      background-color: $tertiary-color;
      &:hover {
        background-color: $secondary-color;
      }
    }
  }
}
</style>
