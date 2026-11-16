<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { products } from '../data/products'
import PageHero from '../components/common/PageHero.vue'
import ProductGrid from '../components/products/ProductGrid.vue'

const { t } = useI18n()
const query = ref('')
const category = ref('all')
const categories = [...new Set(products.map((product) => product.category))]
const normalize = (value) => value.toLocaleLowerCase('de').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ß/g, 'ss')
const filtered = computed(() => products.filter((product) => {
  const text = [product.name.de, product.name.en, product.description?.de, product.description?.en, t(`categories.${product.category}`)].join(' ')
  return (category.value === 'all' || product.category === category.value) && normalize(text).includes(normalize(query.value.trim()))
}))
function reset() { query.value = ''; category.value = 'all' }
</script>

<template>
  <PageHero compact :eyebrow="t('products.eyebrow')" :title="t('products.title')" :intro="t('products.intro')" />
  <section class="catalog-section wrap">
    <div class="catalog-toolbar"><div class="category-filter"><h2>{{ t('products.categories') }}</h2><div class="category-buttons"><button :aria-pressed="category === 'all'" :class="{ selected: category === 'all' }" @click="category = 'all'">{{ t('products.all') }}</button><button v-for="item in categories" :key="item" :aria-pressed="category === item" :class="{ selected: category === item }" @click="category = item">{{ t(`categories.${item}`) }}</button></div></div>
      <div class="catalog-search"><label for="product-search">{{ t('products.searchLabel') }}</label><input id="product-search" v-model="query" type="search" :placeholder="t('products.searchPlaceholder')" /><div class="result-row"><span>{{ t('products.results', { count: filtered.length }) }}</span><button class="text-link" type="button" @click="reset">{{ t('products.clear') }}</button></div></div></div>
    <ProductGrid :products="filtered"><div class="empty-state"><span aria-hidden="true">⌕</span><h2>{{ t('products.emptyTitle') }}</h2><p>{{ t('products.emptyText') }}</p><button class="button" @click="reset">{{ t('products.clear') }}</button></div></ProductGrid>
  </section>
</template>

<style scoped>
.catalog-section { padding-block: 45px 70px; }
.catalog-toolbar { display: grid; grid-template-columns: 245px 1fr; gap: 38px; margin-bottom: 25px; }
.category-filter h2 { font: 600 1.35rem var(--serif); }
.category-buttons { display: grid; gap: 4px; }
.category-buttons button { min-height: 42px; padding: 9px 13px; border: 0; border-bottom: 1px solid var(--line); background: transparent; text-align: left; cursor: pointer; }
.category-buttons button:hover, .category-buttons button.selected, .category-buttons button[aria-pressed="true"] { border-radius: var(--radius-sm); color: white; background: var(--copper); }
.catalog-search { padding-top: 2px; }
.catalog-search label { display: block; margin-bottom: 8px; font-weight: 650; }
.catalog-search input { width: 100%; min-height: 49px; padding: 12px 16px; border: 1px solid var(--line); border-radius: 7px; background: #fffdfa; }
.result-row { display: flex; align-items: center; justify-content: space-between; gap: 15px; margin-top: 15px; color: var(--muted); font-size: .9rem; }
.result-row button { border: 0; background: transparent; cursor: pointer; font-size: .85rem; }
.empty-state { grid-column: 1 / -1; padding: 58px 20px; border: 1px dashed #d4c6b5; border-radius: var(--radius-md); text-align: center; }
.empty-state > span { color: var(--copper); font-size: 44px; }
.empty-state h2 { margin: 10px 0; }
.empty-state p { color: var(--muted); }
@media (max-width: 900px) {
  .catalog-toolbar { grid-template-columns: 1fr; gap: 20px; }
  .category-buttons { display: flex; flex-wrap: wrap; }
  .category-buttons button { border: 1px solid var(--line); border-radius: var(--radius-pill); }
}
@media (max-width: 600px) { .catalog-section { padding-block: 30px 50px; } }
</style>
