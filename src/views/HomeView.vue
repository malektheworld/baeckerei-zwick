<script setup>
import ReviewsSection from '../components/home/ReviewsSection.vue'
import { useI18n } from 'vue-i18n'
import brandLogo from '../../img/brand/zwick-logo.svg'

const { t, tm } = useI18n()
</script>

<template>
  <section class="home-hero" aria-labelledby="home-hero-title">
    <div class="home-hero-copy">
      <img class="home-hero-logo" :src="brandLogo" :alt="t('common.brand')" />
      <span class="hero-rule" aria-hidden="true"></span>
      <p class="hero-tagline">{{ t('home.heroTagline') }}</p>
      <span class="hero-divider" aria-hidden="true"><i></i></span>
      <h1 id="home-hero-title">{{ t('home.heroTitle') }}</h1>
      <RouterLink class="hero-button" to="/produkte">{{ t('common.discover') }} <span aria-hidden="true">→</span></RouterLink>
    </div>
  </section>
  <section class="value-strip">
    <div class="wrap value-grid">
      <article v-for="(value, index) in tm('home.values')" :key="value.title">
        <span class="value-icon" aria-hidden="true">{{ ['✳', '♧', '♡'][index] }}</span>
        <h2>{{ value.title }}</h2><p>{{ value.text }}</p>
      </article>
    </div>
  </section>
  <ReviewsSection />
  <section class="home-details-band">
    <div class="wrap home-details-grid">
      <div class="home-about">
        <p class="eyebrow">{{ t('nav.about') }}</p><h2>{{ t('home.aboutTitle') }}</h2><p>{{ t('home.aboutText') }}</p>
        <RouterLink class="button button-small" to="/ueber-uns">{{ t('common.learnMore') }} <span aria-hidden="true">→</span></RouterLink>
      </div>
      <article class="home-detail-item"><span class="contact-icon" aria-hidden="true">⌖</span><div><h3>{{ t('contact.address') }}</h3><p>{{ t('contact.missing') }}</p></div></article>
      <article class="home-detail-item"><span class="contact-icon" aria-hidden="true">◷</span><div><h3>{{ t('contact.hours') }}</h3><p>{{ t('contact.missing') }}</p></div></article>
      <div class="home-map-placeholder"><span aria-hidden="true">⌖</span><p>{{ t('home.mapMissing') }}</p></div>
    </div>
  </section>
</template>

<style scoped>
.home-hero { position: relative; display: flex; min-height: clamp(480px, 56vw, 670px); align-items: center; overflow: hidden; color: #fff; background: #29221e url('../../img/about/bakery-interior-sepia.png') center / cover no-repeat; }
.home-hero::before { position: absolute; inset: 0 auto 0 0; width: min(42%, 610px); background: linear-gradient(90deg, rgb(30 24 21 / 96%), rgb(35 28 24 / 90%) 82%, transparent); content: ""; }
.home-hero-copy { position: relative; z-index: 1; display: flex; width: min(42%, 610px); min-width: 390px; flex-direction: column; align-items: center; padding: 48px 38px; text-align: center; }
.home-hero-logo { width: min(100%, 340px); height: auto; filter: brightness(0) invert(1); }
.hero-rule { width: 144px; height: 2px; margin: 27px 0 21px; background: var(--gold); }
.hero-tagline { margin: 0; color: #f5e3ca; font: italic clamp(1.3rem, 2.3vw, 1.8rem) var(--serif); }
.hero-divider { display: flex; width: 190px; align-items: center; gap: 12px; margin: 19px 0 20px; color: var(--gold); }
.hero-divider::before, .hero-divider::after { height: 2px; flex: 1; background: currentColor; content: ""; }
.hero-divider i { width: 22px; height: 22px; border: 2px solid currentColor; border-radius: 6px 2px; transform: rotate(-35deg); }
.home-hero h1 { max-width: 390px; margin: 0 0 28px; color: #fff; font: italic clamp(1.35rem, 2.3vw, 1.8rem)/1.4 var(--serif); }
.hero-button { display: flex; width: min(100%, 390px); min-height: 60px; align-items: center; justify-content: space-between; gap: 18px; padding: 13px 28px; border-radius: var(--radius-pill); color: #241b13; background: #e6b76e; font-weight: 650; text-decoration: none; transition: background .2s ease, transform .2s ease; }
.hero-button:hover { background: #f0c889; transform: translateY(-2px); }
.hero-button span { font-size: 1.4rem; }
.value-strip { border-bottom: 1px solid var(--line); background: #f4f0e9; }
.value-grid { display: grid; grid-template-columns: repeat(3, 1fr); padding-block: 26px; }
.value-grid article { padding: 2px 28px; text-align: center; }
.value-grid article + article { border-left: 1px solid #dacfc1; }
.value-icon { color: var(--copper); font-size: 28px; }
.value-grid h2 { margin: 6px 0 4px; font: 600 1rem var(--sans); letter-spacing: 0; }
.value-grid p { max-width: 260px; margin: auto; color: var(--muted); font-size: .88rem; line-height: 1.45; }
.home-details-band { padding-block: 25px; background: var(--cream); }
.home-details-grid { display: grid; grid-template-columns: 1.35fr .8fr .9fr 1.1fr; align-items: center; gap: 22px; }
.home-about .eyebrow { margin-bottom: 5px; }
.home-about h2 { margin-bottom: 7px; font-size: 1.55rem; }
.home-about > p:not(.eyebrow) { margin-bottom: 10px; color: var(--muted); font-size: .83rem; line-height: 1.5; }
.home-detail-item { display: flex; align-items: center; gap: 12px; }
.home-detail-item .contact-icon { flex-basis: 40px; height: 40px; font-size: 20px; }
.home-detail-item h3 { margin-bottom: 4px; font: 650 .9rem var(--sans); letter-spacing: 0; }
.home-detail-item p { margin: 0; color: var(--muted); font-size: .82rem; }
.home-map-placeholder { display: flex; min-height: 88px; align-items: center; justify-content: center; gap: 11px; padding: 14px; border: 1px solid #e3ddd2; border-radius: 6px; background: linear-gradient(135deg, #eee9df, #f8f5ee); }
.home-map-placeholder > span { color: var(--copper); font-size: 27px; }
.home-map-placeholder p { margin: 0; color: var(--muted); font-size: .78rem; line-height: 1.4; }
@media (max-width: 900px) { .home-details-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) {
  .home-hero { min-height: 550px; align-items: flex-end; background-position: 57% center; }
  .home-hero::before { width: 100%; background: linear-gradient(0deg, rgb(30 24 21 / 96%), rgb(35 28 24 / 84%) 58%, transparent); }
  .home-hero-copy { width: 100%; min-width: 0; padding: 38px 25px 40px; }
  .home-hero-logo { width: min(100%, 290px); }
  .hero-rule { margin: 17px 0 14px; }
  .hero-divider { margin: 14px 0; }
  .home-hero h1 { margin-bottom: 20px; }
  .value-grid { grid-template-columns: 1fr; padding-block: 15px; }
  .value-grid article { padding: 17px 5px; }
  .value-grid article + article { border-top: 1px solid #dacfc1; border-left: 0; }
  .home-details-grid { grid-template-columns: 1fr 1fr; gap: 18px 13px; }
  .home-about, .home-map-placeholder { grid-column: 1 / -1; }
}
</style>
