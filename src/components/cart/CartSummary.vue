<template lang="pug">
  .cart-summary
    h2 Order Summary
    .summary-item
      span Subtotal
      span ${{ subtotal }}
    .summary-item(v-if="subtotal > 0")
      span Discount (-20%)
      span.discount -${{ discount }}
    .summary-item(v-if="subtotal > 0")
      span Delivery Fee
      span ${{ deliveryFee }}
    .summary-item.total
      span Total
      span ${{ total }}
    .d-flex.gap-3.mb-3.align-items-center
      input.form-control(type="text" v-model="promoCode" placeholder="Add promo code")
      BlackBtn.btn.btn-dark.rounded-pill(@click="applyPromoCode" :buttonText="'Apply'")
    BlackBtn.checkout-btn(:buttonText="'Go to Checkout'")
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import BlackBtn from "@/components/common/BlackBtn.vue";
import { useCartStore } from "@/components/cart/CartStore.vue";

const cartStore = useCartStore();

const baseDeliveryFee = 15;
const discountPercentage = 0.2;

const subtotal = computed(() => cartStore.totalPrice);
const discount = computed(() =>
  Math.round(subtotal.value * discountPercentage)
);
const deliveryFee = computed(() => (subtotal.value > 0 ? baseDeliveryFee : 0));
const total = computed(
  () => subtotal.value - discount.value + deliveryFee.value
);

const promoCode = ref("");

const applyPromoCode = () => {
  console.log("Applying promo code:", promoCode.value);
};
</script>

<style scoped lang="scss">
.cart-summary {
  background-color: #f8f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  .summary-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    .discount {
      color: #ff0000;
    }
  }

  .total {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 1rem;
    border-top: 1px solid #e0e0e0;
    padding-top: 1rem;
  }

  .apply-btn {
    background-color: #000;
    color: #fff;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0 4px 4px 0;
  }

  .checkout-btn {
    width: 100%;
  }
}
</style>
