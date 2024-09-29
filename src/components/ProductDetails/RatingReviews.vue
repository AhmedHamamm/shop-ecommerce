<template lang="pug">
  .d-flex.justify-content-between.align-items-center.flex-wrap.mb-3
    h3 All Reviews ({{ totalReviews }})
    .d-flex.align-items-center.gap-3
      button.btn.btn-outline-secondary.me-2
        i.bx.bx-filter-alt
      select.form-select(v-model="sortOption")
        option(value="latest") Latest
        option(value="highest") Highest Rating
        option(value="lowest") Lowest Rating
      BlackBtn.btn.w-100(:buttonText="'Write a Review'")
  .review-list.mb-5
    .row
      .col-md-6(v-for="(review, index) in displayedReviews" :key="review.id")
        .review-item.mb-4.border.border-1.p-4.rounded-4
          .d-flex.justify-content-between.align-items-start
            .d-flex.align-items-center
              .stars.text-warning.me-2
                i.bx.bxs-star(v-for="n in Math.floor(review.rating)" :key="n")
                i.bx.bxs-star-half(v-if="review.rating % 1 !== 0")
              h5.mb-0 {{ review.author }}
          p.mt-2 {{ review.content }}
          .text-muted {{ review.date }}
    .d-flex.justify-content-center
      WhiteBtn.btn.mt-2(v-if="showLoadMore" @click="loadMoreReviews" :buttonText="buttonText")
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useReviewsData } from './ReviewsData.vue'
import BlackBtn from '@/components/common/BlackBtn.vue'
import WhiteBtn from '@/components/common/WhiteBtn.vue'

const props = defineProps({
  rating: {
    type: Number,
    required: true
  }
})

const { totalReviews, sortOption, sortedReviews } = useReviewsData()

const currentReviewCount = ref(4)
const reviewsPerPage = 1
const showLoadMore = computed(() => currentReviewCount.value < totalReviews.value)

const displayedReviews = computed(() => {
  return sortedReviews.value.slice(0, currentReviewCount.value)
})

const loadMoreReviews = () => {
  currentReviewCount.value += reviewsPerPage

  if (currentReviewCount.value > totalReviews.value) {
    currentReviewCount.value = totalReviews.value
  }
}
const buttonText = ref('Load More')
</script>
