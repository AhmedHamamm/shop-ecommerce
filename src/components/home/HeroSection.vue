<template lang="pug">
.hero-section.pt-5
  .container
    .row
      .col-lg-6.col-md-12.mt-5.align-content-around
        h1.display-4.fw-bold.mb-4 {{ title }}
        p.lead.mb-4 {{ description }}
        BlackBtn.mb-5.px-5.d-lg-inline-block.d-sm-block(:buttonText="ctaText")
        .row.text-center
          .col-lg-4.col-sm-6.mb-3.mb-lg-0
            h2.display-6.fw-bold {{ stats.brands }}+
            p.text-muted {{ stats.brandsText }}
          .col-lg-4.col-sm-6.mb-3.mb-lg-0
            h2.display-6.fw-bold {{ stats.products }}+
            p.text-muted {{ stats.productsText }}
          .col-lg-4.col-sm-12
            h2.display-6.fw-bold {{ stats.customers }}+
            p.text-muted {{ stats.customersText }}
      .col-lg-6.col-md-12.mt-5
        AspectImage(:src="bannerImg" :alt="bannerAltText" :aspect-ratio="aspectRatio")
</template>

<script setup lang="ts">
import bannerImg from '@/assets/banner-img.jpg'
import AspectImage from '@/components/common/AspectImage.vue'
import BlackBtn from '@/components/common/BlackBtn.vue'

const title = 'FIND CLOTHES THAT MATCHES YOUR STYLE'
const description =
  'Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.'
const ctaText = 'Shop Now'
const bannerAltText = 'banner'

const stats = {
  brands: '200',
  brandsText: 'International Brands',
  products: '2,000',
  productsText: 'High-Quality Products',
  customers: '30,000',
  customersText: 'Happy Customers'
}

const aspectRatio = '1:1'
</script>

<style scoped lang="scss">
.hero-section {
  background-color: #f2f0f1;
}

@media (max-width: 768px) {
  .hero-section {
    button {
      width: 100%;
    }
  }
}
</style>
