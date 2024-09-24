<template lang="pug">
#app

  Header.sticky-top
  RouterView
  NewsLetter
  Footer
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'
import Header from '@/components/layouts/header/Header.vue'
import NewsLetter from '@/components/home/NewsLetter.vue'
import Footer from '@/components/layouts/footer/Footer.vue'
</script>
