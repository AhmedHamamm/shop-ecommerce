<template lang="pug">
  nav.py-4.text-body
    ol.d-flex.gap-4.align-items-center
      li.list-unstyled.text-center(v-for="(breadcrumb, i) in breadcrumbs" :key="i")
        RouterLink.d-flex.text-decoration-none.text-body.opacity-75.align-items-center(:to="breadcrumb.href") {{ breadcrumb.text }}
          i.bx.bx-chevron-right(v-if="i < breadcrumbs.length - 1")
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
defineProps<{
  breadcrumbs: { text: string; href: string }[]
}>()
</script>

<style scoped lang="scss"></style>
