<template lang="pug">
.container(v-if="product")
  Breadcrumb(:breadcrumbs="breadcrumbs")
  .row
    .col-md-6
      ProductImages(:images="product.images" :productName="product.name")
    .col-md-6
      ProductContent(:product="product")
  ProductTabs
  MightLike
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

// Components
import Breadcrumb from '@/components/common/Breadcrumb.vue'
import ProductImages from '@/components/ProductDetails/ProductImages.vue'
import ProductContent from '@/components/ProductDetails/ProductContent.vue'
import ProductTabs from '@/components/ProductDetails/ProductTabs.vue'
import MightLike from '@/components/ProductDetails/MightLike.vue'
import { products } from '@/components/product/ProductData.vue'

const route = useRoute()
const product = ref<{
  id: number
  name: string
  images: {
    main: string
    additional: string[]
  }
  rating: number
  price: number
  originalPrice: number
  discount: string
} | null>(null)

onMounted(() => {
  const productId = Number(route.params.id)
  const foundProduct = products.value.find((p) => p.id === productId)
  product.value = foundProduct || null
})

const breadcrumbs = [
  { text: 'Home', href: '/' },
  { text: 'Shop', href: '#' },
  { text: computed(() => product.value?.name || ''), href: '#' }
]
</script>

<style scoped lang="scss"></style>
