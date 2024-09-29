<template lang="pug">
.image-wrapper(:class="aspectClass")
  .loader(v-if="isLoading")
  v-lazy-image.image(
    :src="src"
    :alt="alt"
  )
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
// @ts-ignore
import VLazyImage from 'v-lazy-image'

interface Props {
  src: string
  alt?: string
  aspectRatio?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  aspectRatio: '16:9'
})

const isLoading = ref(true)

const onImageLoad = () => {
  isLoading.value = false
}

const aspectClass = computed(() => `aspect-${props.aspectRatio.replace(':', '-')}`)
</script>

<style scoped lang="scss">
.image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  display: block;

  &.aspect-21-9 {
    padding-bottom: calc(100% / (21 / 9)); /* 21:9 aspect ratio */
  }
  &.aspect-16-9 {
    padding-bottom: calc(100% / (16 / 9)); /* 16:9 aspect ratio */
  }
  &.aspect-4-3 {
    padding-bottom: calc(100% / (4 / 3)); /* 4:3 aspect ratio */
  }
  &.aspect-3-4 {
    padding-bottom: calc(100% / (3 / 4)); /* 3:4 aspect ratio */
  }
  &.aspect-2-1 {
    padding-bottom: calc(100% / (2 / 1)); /* 2:1 aspect ratio */
  }
  &.aspect-1-2 {
    padding-bottom: calc(100% / (1 / 2)); /* 1:2 aspect ratio */
  }
  &.aspect-1-1 {
    padding-bottom: calc(100% / (1 / 1)); /* 1:1 aspect ratio */
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: gradient 1.5s ease-in-out infinite;
    background: linear-gradient(90deg, #a9a7a7, #f3f3f3, #a9a7a7);
    background-size: 200% 100%;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
