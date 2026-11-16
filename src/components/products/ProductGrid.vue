<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: { type: Array, required: true }, compact: Boolean })
</script>
<template><div v-if="products.length" class="product-grid" :class="{ 'product-grid-compact': compact }"><ProductCard v-for="product in products" :key="product.id" :product="product" :compact="compact" /></div><slot v-else /></template>

<style scoped>
.product-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
.product-grid-compact { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px 22px; }
@media (max-width: 900px) { .product-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) {
  .product-grid { gap: 11px; }
  .product-grid-compact { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
</style>
