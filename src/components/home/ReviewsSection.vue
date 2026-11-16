<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="reviews-section">
    <div class="wrap reviews-inner">
      <div class="reviews-copy">
        <p class="eyebrow">{{ t('home.reviewsEyebrow') }}</p>
        <h2>{{ t('home.reviewsTitle') }}</h2>
        <p>{{ t('home.reviewsText') }}</p>
        <span class="review-placeholder-link" aria-disabled="true">{{ t('home.reviewsLink') }} <span aria-hidden="true">↗</span></span>
      </div>
      <div class="review-config-card">
        <span class="review-mark" aria-hidden="true">G</span>
        <div><strong>{{ t('home.reviewsCardTitle') }}</strong><p>{{ t('home.reviewsCardText') }}</p></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section { padding-block: 19px; border-block: 1px solid var(--line); background: #f3efe9; }
.reviews-inner { display: grid; grid-template-columns: .95fr 2fr; align-items: center; gap: 34px; }
.reviews-copy .eyebrow { margin-bottom: 5px; }
.reviews-copy h2 { margin-bottom: 8px; font-size: clamp(1.8rem, 3vw, 2.5rem); }
.reviews-copy > p:not(.eyebrow) { max-width: 410px; margin-bottom: 10px; color: var(--muted); font-size: .9rem; line-height: 1.5; }
.review-placeholder-link { display: inline-flex; align-items: center; gap: 10px; padding: 8px 13px; border: 1px solid var(--line); border-radius: var(--radius-pill); background: #fffdfa; color: var(--muted); font-size: .82rem; }
.review-config-card { display: flex; min-height: 120px; align-items: center; gap: 17px; padding: 24px 28px; border: 1px solid #e8e0d7; border-radius: var(--radius-md); background: rgb(255 253 250 / 80%); }
.review-mark { display: grid; flex: 0 0 42px; height: 42px; place-items: center; border: 1px solid var(--line); border-radius: 50%; color: var(--copper); font: 700 1.25rem var(--serif); }
.review-config-card strong { display: block; margin-bottom: 5px; }
.review-config-card p { margin: 0; color: var(--muted); font-size: .9rem; }
@media (max-width: 900px) { .reviews-inner { grid-template-columns: 1fr 1.3fr; gap: 20px; } }
@media (max-width: 600px) {
  .reviews-section { padding-block: 28px; }
  .reviews-inner { grid-template-columns: 1fr; gap: 18px; }
  .review-config-card { min-height: 96px; padding: 18px; }
}
</style>
