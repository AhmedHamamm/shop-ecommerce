<script lang="ts">
import { ref } from 'vue'

export const viewAll = ref('View All')

export const products = ref([
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    description:
      'This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    images: {
      main: new URL('@/assets/products-details/graphic-tshirt-front.png', import.meta.url).href,
      additional: [
        new URL('@/assets/products-details/graphic-tshirt-back.png', import.meta.url).href,
        new URL('@/assets/products-details/graphic-tshirt.png', import.meta.url).href
      ]
    },
    rating: 4.5,
    price: 120,
    originalPrice: 0,
    discount: '',
    colors: ['olive', 'maroon', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    quantity: 6
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    description:
      'These skinny fit jeans are perfect for any occasion. Crafted from a soft and breathable fabric, they offer superior comfort and style.',
    images: {
      main: new URL('@/assets/products/jeans.png', import.meta.url).href,
      additional: []
    },
    rating: 3.5,
    price: 240,
    originalPrice: 260,
    discount: '-20%',
    colors: ['olive', 'maroon', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    quantity: 5
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    description:
      'This checkered shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    images: {
      main: new URL('@/assets/products/shirt.png', import.meta.url).href,
      additional: []
    },
    rating: 4.5,
    price: 180,
    originalPrice: 0,
    discount: '',
    colors: ['olive', 'maroon', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    quantity: 5
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    description:
      'This sleeve striped t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    images: {
      main: new URL('@/assets/products/sleeve-tshirt.png', import.meta.url).href,
      additional: []
    },
    rating: 4.5,
    price: 130,
    originalPrice: 160,
    discount: '-30%',
    colors: ['olive', 'maroon', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    quantity: 5
  },
  {
    id: 5,
    name: 'Vertical Striped Shirt',
    description:
      'This vertical striped shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    images: {
      main: new URL('@/assets/products/striped-shirt.png', import.meta.url).href,
      additional: []
    },
    rating: 5.0,
    price: 212,
    originalPrice: 232,
    discount: '-20%',
    colors: ['olive', 'maroon', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    quantity: 5
  },
  {
    id: 6,
    name: 'Courage Graphic T-shirt',
    description:
      'This courage graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    images: {
      main: new URL('@/assets/products/graphic-tshirt.png', import.meta.url).href,
      additional: []
    },
    rating: 4.0,
    price: 145,
    originalPrice: 0,
    discount: '',
    colors: ['olive', 'maroon', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    quantity: 5
  },
  {
    id: 7,
    name: 'Loose Fit Bermuda Shorts',
    description:
      'These loose fit bermuda shorts are perfect for any occasion. Crafted from a soft and breathable fabric, they offer superior comfort and style.',
    images: {
      main: new URL('@/assets/products/shorts.png', import.meta.url).href,
      additional: []
    },
    rating: 3.0,
    price: 80,
    originalPrice: 0,
    discount: '',
    colors: ['olive', 'maroon', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    quantity: 5
  },
  {
    id: 8,
    name: 'Faded Skinny Jeans',
    description:
      'These faded skinny jeans are perfect for any occasion. Crafted from a soft and breathable fabric, they offer superior comfort and style.',
    images: {
      main: new URL('@/assets/products/skinny-jeans.png', import.meta.url).href,
      additional: []
    },
    rating: 4.5,
    price: 210,
    originalPrice: 0,
    discount: '',
    colors: ['olive', 'maroon', 'navy'],
    sizes: ['Small', 'Medium', 'Large', 'X-Large'],
    quantity: 5
  }
])
</script>
