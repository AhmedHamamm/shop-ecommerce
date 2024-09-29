<template lang="pug">
.container.my-5
  h2.text-center.mb-5 {{ title }}
  .row
    ProductCard(v-for="product in displayedProducts" :key="product.id" :product="product")
  .text-center.mt-4
    WhiteBtn(:buttonText="viewAll" @click="viewAllProducts")
</template>

<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import ProductCard from '@/components/product/ProductCard.vue'
import WhiteBtn from '@/components/common/WhiteBtn.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  viewAll: {
    type: String,
    required: true
  }
})

const numProductsToShow = ref(4)

const displayedProducts = computed(() => props.products.slice(0, numProductsToShow.value))

const viewAllProducts = () => {
  numProductsToShow.value = numProductsToShow.value === 4 ? 8 : 4
}
</script>
