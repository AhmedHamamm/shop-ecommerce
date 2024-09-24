<template lang="pug">
main
  HeroSection
  BrandsLogo
  NewArrivals
  hr.container.my-5.border-2
  TopSelling
  BrowseByStyle
  Testimonials
</template>

<script setup lang="ts">
// Components
import HeroSection from '@/components/home/HeroSection.vue'
import BrandsLogo from '@/components/home/BrandsLogo.vue'
import NewArrivals from '@/components/home/NewArrivals.vue'
import TopSelling from '@/components/home/TopSelling.vue'
import BrowseByStyle from '@/components/home/BrowseByStyle.vue'
import Testimonials from '@/components/home/Testimonials.vue'
</script>
