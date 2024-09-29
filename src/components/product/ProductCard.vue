<template lang="pug">
    .col-md-6.col-lg-3
      RouterLink.card.text-decoration-none.border-0(:to="{ name: 'productDetails', params: { id: product.id }, props: { product } }")
        AspectImage.rounded-4(:src="product.images.main" :alt="product.name" :aspect-ratio="aspectRatio")
        .card-body
          h5.card-title {{ product.name }}
          .d-flex.gap-2
            span.text-warning.fs-5
              i.bx.bxs-star(v-for="n in Math.floor(product.rating)" :key="n")
              i.bx.bxs-star-half(v-if="product.rating % 1 !== 0")
            span {{ product.rating }}/5
          p.card-text
            span.card-text.fw-bold.me-2 {{ product.price }}
            span.text-black-50.text-decoration-line-through.me-2(v-if="product.originalPrice && product.originalPrice !== 0") {{ product.originalPrice }}
            span.text-danger.bg-danger.bg-opacity-10.rounded-5.p-1(v-if="product.discount") {{ product.discount }}
  </template>

<script setup lang="ts">
import { defineProps } from 'vue'

import AspectImage from '@/components/common/AspectImage.vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const aspectRatio = '1:1'
</script>
