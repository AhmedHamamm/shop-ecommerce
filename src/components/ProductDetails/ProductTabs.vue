<template lang="pug">
  .product-tabs.mt-5
    ul.nav.nav-tabs.border-bottom-0.mb-3.d-flex.justify-content-around
      li.nav-item(v-for="tab in tabs" :key="tab.id")
        a.nav-link(:class="{ active: activeTab === tab.id }" @click="setActiveTab(tab.id)") {{ tab.name }}
    .tab-content
      #product-details.tab-pane.fade(:class="{ 'show active': activeTab === 'details' }" role="tabpanel")
        h3 Product Details
      #rating-reviews.tab-pane.fade(:class="{ 'show active': activeTab === 'reviews' }" role="tabpanel")
        RatingReviews
      #faqs.tab-pane.fade(:class="{ 'show active': activeTab === 'faqs' }" role="tabpanel")
        h3 FAQs
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import RatingReviews from '@/components/ProductDetails/RatingReviews.vue'

const tabs = [
  { id: 'details', name: 'Product Details' },
  { id: 'reviews', name: 'Rating & Reviews' },
  { id: 'faqs', name: 'FAQs' }
]

const activeTab = ref('reviews')
const setActiveTab = (tabId: string) => {
  activeTab.value = tabId
}
</script>

<style scoped lang="scss">
.product-tabs {
  .nav-tabs {
    .nav-link {
      color: #6c757d;
      border: none;
      padding: 0.5rem 1rem;
      margin-right: 1rem;
      cursor: pointer;

      &.active {
        color: #000;
        font-weight: bold;
        border-bottom: 2px solid #000;
      }
    }
  }

  .review-item {
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 1rem;

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>
