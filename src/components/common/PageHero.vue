<script setup>
defineProps({ eyebrow: { type: String, required: true }, title: { type: String, required: true }, intro: { type: String, default: '' }, compact: Boolean, home: Boolean })
</script>
<template>
  <section class="page-hero" :class="{ 'page-hero-compact': compact, 'page-hero-home': home }">
    <div class="wrap hero-copy"><p class="eyebrow">{{ eyebrow }}</p><h1>{{ title }}</h1><p v-if="intro" class="hero-intro">{{ intro }}</p><slot /></div>
  </section>
</template>

<style scoped>
.page-hero { position: relative; display: flex; min-height: 365px; align-items: center; overflow: hidden; color: white; background-color: #2d1b10; background-image: linear-gradient(90deg, rgb(23 15 10 / 82%) 0%, rgb(33 21 12 / 70%) 38%, rgb(33 21 12 / 8%) 100%), url('../../../img/about/bakery-interior-sepia.png'); background-position: center, center; background-size: cover; }
.page-hero::after { position: absolute; inset: 0; background: linear-gradient(0deg, rgb(22 14 9 / 12%), transparent 35%); content: ""; pointer-events: none; }
.page-hero-compact { min-height: 275px; }
.page-hero-home { min-height: 285px; }
.hero-copy { position: relative; z-index: 1; padding-block: 48px; }
.hero-copy h1 { max-width: 700px; margin-bottom: 20px; }
.page-hero .eyebrow { color: #f0c98e; }
.hero-intro { max-width: 510px; margin-bottom: 23px; font-size: clamp(1rem, 2vw, 1.2rem); }
.page-hero-home .hero-copy { padding-block: 30px; }
.page-hero-home h1 { max-width: 540px; margin-bottom: 12px; font-size: clamp(2.9rem, 5.2vw, 4rem); }
.page-hero-home .hero-intro { max-width: 425px; margin-bottom: 16px; font-size: 1rem; }
@media (max-width: 600px) {
  .page-hero { min-height: 390px; background-position: center, center; }
  .page-hero-compact { min-height: 235px; }
  .page-hero-home { min-height: 340px; }
  .page-hero-home h1 { font-size: clamp(2.8rem, 13vw, 4rem); }
  .hero-copy { padding-block: 38px; }
}
</style>
