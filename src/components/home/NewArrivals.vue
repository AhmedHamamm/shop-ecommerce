<template lang="pug">
  ProductList(:products="products" title="NEW ARRIVALS" viewAll="viewAll")
</template>

<script setup lang="ts">
import { products } from '@/components/product/ProductData.vue'
import ProductList from '@/components/product/ProductList.vue'
</script>
