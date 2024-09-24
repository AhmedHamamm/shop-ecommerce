<template lang="pug">
  form.d-flex.flex-grow-1.me-3(@submit.prevent="search" role="search")
    .input-group.position-relative
      input.form-control.bg-light.ps-4.rounded-pill(
        type="search"
        v-model="searchQuery"
        placeholder="Search for products..."
        aria-label="Search"
      )
      i.bx.bx-search.position-absolute.top-50.start-0.translate-middle-y.ms-2
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchQuery = ref('')
// TODO: Implement search functionality 3la searchQuery bas mesh delwa2ty
const search = () => {
  if (searchQuery.value.trim()) {
    console.log(`Searching for: ${searchQuery.value}`)
  } else {
    console.log('Search query is empty')
  }
}
</script>

<style scoped lang="scss">
.form-control {
  transition: width 0.3s ease-in-out;
  &:focus {
    box-shadow: none;
    border: 1px solid $secondary-color;
  }
}

@media (max-width: 992px) {
  .form-control {
    width: 100%;

    &:focus {
      width: 100%;
    }
  }
}
</style>
