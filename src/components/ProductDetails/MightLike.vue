<template lang="pug">
  ProductList(:products="products" title="YOU MIGHT ALSO LIKE" viewAll="Load More")
</template>

<script setup lang="ts">
import { products } from '@/components/product/ProductData.vue'
import ProductList from '@/components/product/ProductList.vue'
</script>
