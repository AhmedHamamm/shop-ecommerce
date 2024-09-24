<template lang="pug">
  button.btn.btn-outline-dark.px-5.py-2.rounded-pill {{ buttonText }}
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

const props = defineProps<{
  buttonText: string
}>()

const buttonText = ref(props.buttonText)
</script>
