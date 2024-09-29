<template lang="pug">
  .container
    .browse-by-dress-style.p-5.rounded-5.mb-5
      h2.text-center.fw-bold.mb-4 {{ title }}
      .row.g-2
        .col-lg-4
          .card
            AspectImage.rounded-5(:src="casualImg" alt="Casual" :aspect-ratio="casualAspectRatio")
            h5.card-title.text-center Casual
        .col-lg-8
          .card
            AspectImage.rounded-5(:src="formalImg" alt="Formal" :aspect-ratio="formalAspectRatio")
            h5.card-title.text-center Formal
        .col-lg-8
          .card
            AspectImage.rounded-5(:src="partyImg" alt="Party" :aspect-ratio="partyAspectRatio")
            h5.card-title.text-center.position-absolute.fs-2.card-title-position Party
        .col-lg-4
          .card
            AspectImage.rounded-5(:src="gymImg" alt="Gym" :aspect-ratio="gymAspectRatio")
            h5.card-title.text-center Gym
</template>

<script setup lang="ts">
import AspectImage from '@/components/common/AspectImage.vue'
import casualImg from '@/assets/category/casual.png'
import formalImg from '@/assets/category/formal.png'
import partyImg from '@/assets/category/party.png'
import gymImg from '@/assets/category/gym.png'

const title = 'BROWSE BY DRESS STYLE'
const casualAspectRatio = '1:1'
const formalAspectRatio = '2:1'
const partyAspectRatio = '2:1'
const gymAspectRatio = '1:1'
</script>

<style scoped lang="scss">
.browse-by-dress-style {
  background-color: #f2f2f2;
  .card {
    position: relative;
    border: none;
    .card-img-top {
      border-radius: 0.5rem;
    }
    .card-body {
      padding: 1rem 0;
    }
  }
  h5 {
    position: absolute;
    top: 15%;
    left: 15%;
    transform: translate(-50%, -50%);
  }
}
</style>
