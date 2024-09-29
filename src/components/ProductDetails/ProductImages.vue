<template lang="pug">
  .row
    .col-3
      .list-group
        a.list-group-item.border-0(v-for="(image, index) in allImages" :key="index" @click="setActiveImage(index)")
          AspectImage.rounded-4(:src="image" :alt="`${productName} - Image ${index + 1}`" aspect-ratio="3:4")
    .col-9
      AspectImage.rounded-4(:src="activeImage" :alt="productName" aspect-ratio="1:1")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import AspectImage from '@/components/common/AspectImage.vue'

const props = defineProps<{
  images: {
    main: string
    additional: string[]
  }
  productName: string
}>()
const allImages = computed(() => [
  props.images.main,
  ...(props.images.additional?.length ? props.images.additional : [])
])
const activeImage = ref(props.images.main)

const setActiveImage = (index: number) => {
  activeImage.value = allImages.value[index]
}
</script>
