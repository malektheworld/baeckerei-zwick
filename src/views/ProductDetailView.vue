<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { products } from '../data/products'
import ProductCard from '../components/products/ProductCard.vue'

const route = useRoute()
const { locale, t } = useI18n()
const product = computed(() => products.find((item) => item.slug === route.params.slug))
const related = computed(() => {
  if (!product.value) return []
  return products
    .filter((item) => item.id !== product.value.id && item.category === product.value.category)
    .slice(0, 4)
})
</script>

<template>
  <section v-if="product" class="product-detail wrap">
    <nav class="breadcrumbs" :aria-label="t('detail.breadcrumbs')">
      <RouterLink to="/" :aria-label="t('nav.home')">⌂</RouterLink><span aria-hidden="true">›</span>
      <RouterLink to="/produkte">{{ t('nav.products') }}</RouterLink><span aria-hidden="true">›</span>
      <span aria-current="page">{{ product.name[locale] }}</span>
    </nav>

    <div class="product-main">
      <div class="product-hero-image"><img :src="product.image" :alt="t('common.productImageAlt', { name: product.name[locale] })" /></div>
      <div class="product-info">
        <p class="product-category">{{ t(`categories.${product.category}`) }}</p>
        <h1>{{ product.name[locale] }}</h1>
        <p class="product-description">{{ product.description?.[locale] || t('detail.description', { name: product.name[locale] }) }}</p>
        <div class="product-values">
          <div><span aria-hidden="true">♧</span><p>{{ t('detail.valueFresh') }}</p></div>
          <div><span aria-hidden="true">♧</span><p>{{ t('detail.valueCraft') }}</p></div>
          <div><span aria-hidden="true">♡</span><p>{{ t('detail.valueClassic') }}</p></div>
        </div>
        <RouterLink class="button contact-button" to="/kontakt">{{ t('nav.call') }} <span aria-hidden="true">→</span></RouterLink>
      </div>
    </div>

    <section v-if="related.length" class="related-products">
      <div class="related-heading"><h2>{{ t('detail.related') }}</h2><RouterLink class="text-link" to="/produkte">{{ t('common.allProducts') }} →</RouterLink></div>
      <div class="related-grid"><ProductCard v-for="item in related" :key="item.id" :product="item" compact /></div>
    </section>
  </section>
  <section v-else class="unknown-product wrap">
    <p class="eyebrow">404</p><h1>{{ t('notFound.title') }}</h1><RouterLink class="button" to="/produkte">{{ t('common.allProducts') }}</RouterLink>
  </section>
</template>

<style scoped>
.product-detail { padding-bottom: 48px; }
.breadcrumbs { display: flex; align-items: center; gap: 13px; padding-block: 23px 28px; color: var(--muted); font-size: .88rem; }
.breadcrumbs a { color: var(--copper); text-decoration: none; }
.breadcrumbs a:hover { text-decoration: underline; }
.product-main { display: grid; grid-template-columns: 1.2fr .88fr; align-items: center; gap: clamp(32px, 5vw, 60px); }
.product-hero-image { overflow: hidden; aspect-ratio: 1.34; border-radius: 16px; background: #f2e9dc; box-shadow: 0 8px 30px rgb(45 29 15 / 10%); }
.product-hero-image img { display: block; width: 100%; height: 100%; object-fit: cover; }
.product-category { margin-bottom: 6px; color: var(--copper); font-size: .83rem; font-weight: 750; letter-spacing: .12em; text-transform: uppercase; }
.product-info h1 { margin-bottom: 12px; font-size: clamp(2.6rem, 5vw, 3.35rem); }
.product-description { max-width: 560px; margin-bottom: 20px; color: var(--ink); font-size: 1.05rem; line-height: 1.6; }
.product-values { display: grid; grid-template-columns: repeat(3, 1fr); margin-bottom: 20px; border-block: 1px solid var(--line); }
.product-values > div { display: grid; min-height: 91px; align-content: center; justify-items: center; gap: 6px; padding: 8px; text-align: center; }
.product-values > div + div { border-left: 1px solid var(--line); }
.product-values span { color: var(--copper); font-size: 1.8rem; }
.product-values p { max-width: 100px; margin: 0; font-size: .88rem; line-height: 1.35; }
.contact-button { min-width: 225px; }
.related-products { margin-top: 40px; padding-top: 28px; border-top: 1px solid var(--line); }
.related-heading { display: flex; align-items: baseline; justify-content: space-between; gap: 18px; margin-bottom: 15px; }
.related-heading h2 { margin: 0; font-size: 1.65rem; }
.related-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
.unknown-product { min-height: 50vh; padding-block: 70px; }
@media (max-width: 760px) { .product-main { grid-template-columns: 1fr; gap: 26px; } .product-hero-image { aspect-ratio: 1.3; } .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 500px) { .breadcrumbs { gap: 8px; padding-block: 17px 20px; font-size: .78rem; } .product-info h1 { font-size: 2.35rem; } .product-description { font-size: .97rem; } .related-heading { align-items: flex-start; flex-direction: column; } }
</style>
