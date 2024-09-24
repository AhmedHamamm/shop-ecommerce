<template lang="pug">
  div(:class="aspectClass" class="image-wrapper")
    img(:src="src" :alt="alt" class="image")
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  src: string
  alt?: string
  aspectRatio?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  aspectRatio: '16:9'
})

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
  &.aspect-2-1 {
    padding-bottom: calc(100% / (2 / 1)); /* 2:1 aspect ratio */
  }
  &.aspect-1-2 {
    padding-bottom: calc(100% / (1 / 2)); /* 1:2 aspect ratio */
  }
  &.aspect-1-1 {
    padding-bottom: calc(100% / (1 / 1)); /* 1:1 aspect ratio */
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
