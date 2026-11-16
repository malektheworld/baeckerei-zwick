<script setup>
import { useI18n } from 'vue-i18n'
import brandLogo from '../../../img/brand/zwick-logo.svg'
const { t } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="wrap footer-grid">
      <RouterLink class="brand brand-footer" to="/" :aria-label="t('common.brand')">
        <img class="brand-logo" :src="brandLogo" alt="" />
      </RouterLink>
      <div><h2>{{ t('footer.links') }}</h2><RouterLink to="/">{{ t('nav.home') }}</RouterLink><RouterLink to="/produkte">{{ t('nav.products') }}</RouterLink><RouterLink to="/ueber-uns">{{ t('nav.about') }}</RouterLink><RouterLink to="/kontakt">{{ t('nav.contact') }}</RouterLink></div>
      <div><h2>{{ t('footer.contact') }}</h2><p>{{ t('footer.details') }}</p><RouterLink to="/kontakt">{{ t('nav.contact') }} ↗</RouterLink></div>
      <p class="footer-tagline">{{ t('common.tagline') }} <span aria-hidden="true">♡</span></p>
    </div>
    <div class="wrap footer-bottom"><span>© {{ new Date().getFullYear() }} {{ t('common.brand') }}. {{ t('footer.rights') }}</span><div><RouterLink to="/datenschutz">{{ t('footer.legal') }} · {{ t('meta.privacy') }}</RouterLink><RouterLink to="/impressum">{{ t('meta.imprint') }}</RouterLink></div></div>
  </footer>
</template>

<style scoped>
.site-footer { color: #f7f1e8; background: #21170f; }
.footer-grid { display: grid; grid-template-columns: 1.1fr 1fr 1.2fr 1fr; gap: 42px; padding-block: 38px 30px; }
.brand-footer { color: #f0c98e; text-decoration: none; }
.brand-logo { display: block; width: 170px; height: auto; }
.footer-grid h2 { margin-bottom: 12px; font: 700 .95rem var(--sans); letter-spacing: 0; }
.footer-grid a:not(.brand) { display: block; width: fit-content; margin: 6px 0; color: #e5ddd3; font-size: .9rem; text-decoration: none; }
.footer-grid a:hover, .footer-bottom a:hover { color: var(--gold); }
.footer-grid p { margin: 0 0 8px; color: #d6cabe; font-size: .9rem; }
.footer-tagline { align-self: center; color: #e4b879 !important; font: italic 1.5rem var(--serif); }
.footer-bottom { display: flex; justify-content: space-between; gap: 20px; padding-block: 15px; border-top: 1px solid #54463a; color: #c8bdb2; font-size: .8rem; }
.footer-bottom div { display: flex; gap: 20px; }
.footer-bottom a { color: inherit; text-decoration: none; }
@media (max-width: 900px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 25px 18px; padding-block: 30px; }
  .footer-tagline { font-size: 1.2rem; }
  .brand-logo { width: 145px; }
  .footer-bottom { align-items: flex-start; flex-direction: column; font-size: .74rem; }
  .footer-bottom div { gap: 13px; }
}
</style>
