<template lang="pug">
  button.btn.btn-black.py-2.rounded-pill {{ buttonText }}
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{
  buttonText: string
}>()

const buttonText = ref(props.buttonText)
</script>

<style scoped lang="scss">
.btn-black {
  background-color: #000;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff !important;
    color: #000 !important;
    border: 1px solid #000 !important;
  }
}
</style>
