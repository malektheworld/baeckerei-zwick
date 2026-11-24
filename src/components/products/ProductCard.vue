<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  product: { type: Object, required: true },
  compact: { type: Boolean, default: false },
})

const { locale, t } = useI18n()
</script>

<template>
  <RouterLink class="product-card-link" :to="`/produkte/${product.slug}`">
  <article class="product-card" :class="{ 'product-card--compact': compact }">
    <div class="product-card__media">
      <div
        class="product-card__image"
        role="img"
        :aria-label="t('common.productImageAlt', { name: product.name[locale] })"
        :style="{ backgroundImage: `url(${product.image})` }"
      >
      </div>
    </div>

    <div class="product-card__content">
      <p class="product-card__category">
        {{ t(`categories.${product.category}`) }}
      </p>
      <h3 class="product-card__title">{{ product.name[locale] }}</h3>
      <p v-if="product.description?.[locale]" class="product-card__description">
        {{ product.description[locale] }}
      </p>
      <span v-if="!compact" class="product-card__action">{{ t('common.viewProduct') }} <span aria-hidden="true">→</span></span>
    </div>
  </article>
  </RouterLink>
</template>

<style scoped>
.product-card {
  overflow: hidden;
  border: 1px solid #eee8df;
  border-radius: 9px;
  background: #fffdfa;
  box-shadow: 0 2px 7px rgb(35 25 15 / 3%);
  transition: box-shadow .18s ease, transform .18s ease;
}

.product-card-link { display: block; color: inherit; text-decoration: none; }
.product-card-link:focus-visible { outline: 3px solid var(--copper); outline-offset: 4px; border-radius: var(--radius-md); }
.product-card-link:hover .product-card { transform: translateY(-2px); box-shadow: 0 8px 20px rgb(35 25 15 / 10%); }

.product-card__media {
  display: grid;
  width: 100%;
  aspect-ratio: 4 / 3;
  place-items: center;
  overflow: hidden;
  background: #f5eee4;
}

.product-card__image {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.product-card__content {
  display: grid;
  min-height: 58px;
  align-content: center;
  justify-items: center;
  padding: 9px 12px 11px;
}

.product-card__category {
  display: none;
  color: var(--copper);
  font-size: .7rem;
  font-weight: 750;
  letter-spacing: .12em;
  text-transform: uppercase;
}

.product-card__title {
  margin: 0;
  font: 600 1.05rem var(--serif);
  text-align: center;
}

.product-card__description {
  margin-bottom: 0;
  color: var(--muted);
  font-size: .9rem;
}

.product-card__action {
  display: none;
}

.product-card__action span { transition: transform .18s ease; }
.product-card-link:hover .product-card__action span { transform: translateX(3px); }

.product-card--compact {
  border-color: #e7dfd5;
  box-shadow: 0 3px 12px rgb(45 29 15 / 6%);
  transition: box-shadow .2s ease, transform .2s ease;
}

.product-card--compact:hover {
  transform: translateY(-2px);
  box-shadow: 0 9px 22px rgb(45 29 15 / 12%);
}

.product-card--compact .product-card__media {
  aspect-ratio: 1.25;
}

.product-card--compact .product-card__content {
  display: grid;
  min-height: 50px;
  align-content: center;
  justify-items: center;
  padding: 10px 12px 12px;
  border-top: 1px solid #eee7df;
  background: linear-gradient(180deg, #fffdfa 0%, #faf6f0 100%);
  text-align: center;
}

.product-card--compact .product-card__category,
.product-card--compact .product-card__description,
.product-card--compact .product-card__action {
  display: none;
}

.product-card--compact .product-card__title {
  margin: 0;
  color: var(--ink);
  font: 600 1rem var(--serif);
  letter-spacing: -.01em;
}

@media (max-width: 600px) {
  .product-card__content { min-height: 52px; padding: 8px; }
  .product-card__title { font-size: 1rem; }
  .product-card__description { font-size: .82rem; }
  .product-card--compact .product-card__media { aspect-ratio: 1; }
}
</style>
