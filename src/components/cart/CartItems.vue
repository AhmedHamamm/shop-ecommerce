<template lang="pug">
  .cart-items(v-if="cartStore.cartItems.length > 0")
    .cart-item.row(v-for="product in cartStore.cartItems" :key="product.id")
      .col-md-4
        .item-image.w-auto
          AspectImage.rounded-4(:src="product.images?.main" :alt="product.name" aspect-ratio="1:1")
      .col-md-8
        .item-details
          .d-flex.justify-content-between.align-items-center
            h3 {{ product.name }}
            .item-remove
              button.remove-btn(@click="removeProduct(product.id)")
                i.bx.bx-trash
          .item-size
            p Size: {{ product.size }}
          .item-color
            p Color: {{ product.color }}
          .d-flex.justify-content-between.align-items-center
            .item-price ${{ product.price }}
            .item-quantity.rounded-pill
              button.quantity-btn.rounded-start(@click="decreaseQuantity(product.id)")
                i.bx.bx-minus
              span.quantity.px-3 {{ product.quantity }}
              button.quantity-btn.rounded-end(@click="increaseQuantity(product.id)")
                i.bx.bx-plus
  .empty-cart.text-center.py-5(v-else)
    h3 Your cart is empty.
    RouterLink.mt-4(to="/")
      BlackBtn.btn.btn-primary.mt-4(:buttonText="btnText")
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AspectImage from '@/components/common/AspectImage.vue'
import BlackBtn from '@/components/common/BlackBtn.vue'
import { useCartStore } from '@/components/cart/CartStore.vue'

const cartStore = useCartStore()

const decreaseQuantity = (productId: number) => {
  const product = cartStore.cartItems.find((item) => item.id === productId)
  if (product && product.quantity > 1) {
    cartStore.updateQuantity(productId, product.quantity - 1)
  } else {
    removeProduct(productId)
  }
}

const increaseQuantity = (productId: number) => {
  const product = cartStore.cartItems.find((item) => item.id === productId)
  if (product) {
    cartStore.updateQuantity(productId, product.quantity + 1)
  }
}

const removeProduct = (productId: number) => {
  cartStore.removeFromCart(productId)
}

const btnText = ref('Go to Home')
</script>

<style scoped lang="scss">
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  .item-image {
    width: 100px;
    margin-right: 1rem;
  }

  .item-details {
    flex-grow: 1;
  }

  .item-quantity {
    display: flex;
    align-items: center;
    margin: 0 1rem;
    background-color: $primary-color;

    .quantity-btn {
      border: transparent;
      padding: 0.5rem;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      &:hover {
        color: $primary-color;
        background-color: $secondary-color;
      }
    }

    .quantity {
      margin: 0 0.5rem;
    }
  }

  .remove-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #ff0000;
  }
}
</style>
