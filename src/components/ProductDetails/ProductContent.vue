<template lang="pug">
.product-content
  h3.display-5.fw-bold.mb-2 {{ product.name }}
  .d-flex.align-items-center.mb-3
    .text-warning.me-2
      i.bx.bxs-star.fs-4(v-for="n in Math.floor(product.rating)" :key="n")
      i.bx.bxs-star-half.fs-4(v-if="product.rating % 1 !== 0")
    span.text-muted {{ product.rating }}/5
  .mb-3
    span.fs-2.fw-bold.me-2 ${{ product.price }}
    span.text-decoration-line-through.text-muted.me-2(v-if="product.originalPrice") {{ product.originalPrice }}
    span.badge.bg-danger(v-if="product.discount") {{ product.discount }}
  p.mb-4 {{ product.description }}
  hr.flex-grow-1
  .mb-4
    h3.h6.mb-3 Select Colors
    .d-flex.gap-3
      button.btn.btn-outline-secondary.rounded-circle.p-3.position-relative(
        v-for="(color, index) in product.colors" 
        :key="index" 
        :class="{ 'border-dark': isColorSelected(index) }"
        :style="{ backgroundColor: color }"
        @click="selectColor(index)"
      )
        span.position-absolute.top-50.start-50.translate-middle.text-white(v-if="isColorSelected(index)")
          i.bx.bx-check.fs-4
  hr.flex-grow-1
  .mb-4
    h3.h6.mb-3 Choose Size
    .btn-group.gap-3
      button.btn.btn-outline-dark.rounded-pill(
        v-for="size in product.sizes" 
        :key="size"
        :class="{ 'active': selectedSize === size }"
        @click="selectSize(size)"
      ) {{ size }}
  hr.flex-grow-1
  .d-flex.align-items-center.my-4.gap-4
    .input-group(style="width: 120px;")
      button.btn.btn-outline-dark.rounded-start(@click="decreaseQuantity" :disabled="quantity === 1") -
      input.form-control.text-center(type="number" v-model.number="quantity" min="1" max="product.quantity")
      button.btn.btn-outline-dark(@click="increaseQuantity" :disabled="quantity === product.quantity") +
    BlackBtn.flex-grow-1.w-auto(@click="addToCart" :button-text="buttonText")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BlackBtn from '@/components/common/BlackBtn.vue'
import { useCartStore } from '@/components/cart/CartStore.vue'

const props = defineProps<{
  product: {
    id: number
    name: string
    rating: number
    price: number
    originalPrice: number
    discount: string
    description: string
    colors: string[]
    sizes: string[]
    quantity: number
    images: {
      main: string
      additional: string[]
    }
  }
}>()

const selectedColor = ref(0)
const selectedSize = ref('')
const quantity = ref(1)

const cartStore = useCartStore()

const selectColor = (index: number) => {
  selectedColor.value = index
}

const isColorSelected = (index: number) => selectedColor.value === index

const selectSize = (size: string) => {
  selectedSize.value = size
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const increaseQuantity = () => {
  if (quantity.value < props.product.quantity) {
    quantity.value++
  }
}

const addToCart = () => {
  if (selectedColor.value === -1) {
    alert('Please select a color')
    return
  }
  if (!selectedSize.value) {
    alert('Please select a size')
    return
  }
  const productToAdd = {
    ...props.product,
    selectedColor: props.product.colors[selectedColor.value],
    selectedSize: selectedSize.value,
    quantity: quantity.value,
    images: props.product.images || [],
    size: selectedSize.value,
    color: props.product.colors[selectedColor.value]
  }
  cartStore.addToCart(productToAdd)
  alert('Product added to cart')
}

const buttonText = ref('Add to Cart')
</script>
