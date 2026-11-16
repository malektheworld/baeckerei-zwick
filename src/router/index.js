import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import LegalView from '../views/LegalView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/produkte', name: 'products', component: ProductsView },
  { path: '/produkte/:slug', name: 'product', component: () => import('../views/ProductDetailView.vue') },
  { path: '/kontakt', name: 'contact', component: ContactView },
  { path: '/ueber-uns', name: 'about', component: AboutView },
  { path: '/impressum', name: 'imprint', component: LegalView, props: { type: 'imprint' } },
  { path: '/datenschutz', name: 'privacy', component: LegalView, props: { type: 'privacy' } },
  { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundView },
]

const router = createRouter({ history: createWebHistory(), routes, scrollBehavior: () => ({ top: 0 }) })

export default router
