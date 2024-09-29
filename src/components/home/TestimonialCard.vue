<template lang="pug">
  .card.p-3.mb-4
    .card-body  
      .d-flex.align-items-center.mb-3
      span.text-warning.fs-5
        i.bx.bxs-star(v-for="n in 5" :key="n")
      span.text-success.ms-2
        i.bx.bxs-check-circle
      h5.card-title {{ name }}
      p.card-text {{ text }}
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss">
.card {
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;

  .card-body {
    .card-title {
      font-weight: bold;
    }

    .card-text {
      font-size: 0.9rem;
      color: #616060;
    }
  }
}
</style>
