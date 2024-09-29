<template lang="pug">
.testimonials-section.my-5.py-5
  .container
    .row
      .col
        h2.mb-4 OUR HAPPY CUSTOMERS
      .col-auto
        .d-flex
          button.me-3(@click="swiperRef?.slidePrev()")
            i.bx.bx-left-arrow-alt
          button(@click="swiperRef?.slideNext()")
            i.bx.bx-right-arrow-alt
    .row
      swiper.testimonials-swiper(
        :modules="modules"
        :loop="true"
        :breakpoints="swiperBreakpoints"
        @swiper="onSwiper"
      )
        swiper-slide(v-for="testimonial in testimonials" :key="testimonial.name")
          TestimonialCard(:name="testimonial.name" :text="testimonial.text")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperType } from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import TestimonialCard from '@/components/home/TestimonialCard.vue'
import { testimonials } from '@/components/home/TestimonialData.vue'

const modules = [Navigation, Pagination]
const swiperRef = ref<SwiperType | null>(null)

const swiperBreakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 30
  }
}

const onSwiper = (swiper: SwiperType) => {
  swiperRef.value = swiper
}
</script>

<style scoped lang="scss">
.testimonials-section {
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    i {
      font-size: 2rem;
      transition: transform 0.3s ease-in-out;
    }
    &:hover {
      i {
        transform: scale(1.2);
      }
    }
  }

  .testimonials-swiper {
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 992px) {
  .testimonials-section {
    button {
      i {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
