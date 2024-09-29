<template lang="pug">
  ProductList(:products="reversedProducts" title="TOP SELLING" viewAll="viewAll")
</template>

<script setup lang="ts">
import { products } from '@/components/product/ProductData.vue'
import ProductList from '@/components/product/ProductList.vue'
import { computed } from 'vue'

const reversedProducts = computed(() => [...products.value].reverse())
</script>
