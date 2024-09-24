import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import Cart from '@/views/Cart.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/product/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true,
    meta: { title: 'Product Details' }
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: { title: 'Shopping Cart' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    // TODO: Add a 404 page ba3den
    component: () => import('@/views/Home.vue'),
    meta: { title: 'Page Not Found' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | E-Commerce Store`
  next()
})

export default router
