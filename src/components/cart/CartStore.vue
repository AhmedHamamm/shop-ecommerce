<script lang="ts">
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface CartItem {
  id: number
  quantity: number
  price: number
  name: string
  images: {
    main: string
    additional: string[]
  }
  size: string
  color: string
}

interface Product {
  id: number
  price: number
  name: string
  images: {
    main: string
    additional: string[]
  }
  size: string
  color: string
  [key: string]: any
}

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])

  const addToCart = (product: Product) => {
    const existingItem = cartItems.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += product.quantity || 1
    } else {
      cartItems.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity || 1,
        images: product.images,
        size: product.size,
        color: product.color
      })
    }
  }

  const removeFromCart = (productId: number) => {
    const index = cartItems.value.findIndex((item) => item.id === productId)
    if (index !== -1) {
      cartItems.value.splice(index, 1)
    }
  }

  const updateQuantity = (productId: number, quantity: number) => {
    const item = cartItems.value.find((item) => item.id === productId)
    if (item) {
      item.quantity = quantity
    }
  }

  const totalItems = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const totalPrice = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  return { cartItems, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice }
})
</script>
