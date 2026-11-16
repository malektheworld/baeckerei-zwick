<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import brandLogo from '../../../img/brand/zwick-logo.svg'

const { t, locale } = useI18n()
const route = useRoute()
const menuOpen = ref(false)
const links = [
  { to: '/', key: 'home' }, { to: '/produkte', key: 'products' },
  { to: '/ueber-uns', key: 'about' }, { to: '/kontakt', key: 'contact' },
]
function setLanguage(value) {
  locale.value = value
  localStorage.setItem('zwick-locale', value)
}
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <header class="site-header">
    <div class="header-inner wrap">
      <RouterLink class="brand" to="/" :aria-label="t('common.brand') + ' — ' + t('nav.home')">
        <img class="brand-logo" :src="brandLogo" alt="" />
      </RouterLink>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="primary-nav" @click="menuOpen = !menuOpen">
        <span class="sr-only">{{ menuOpen ? t('nav.close') : t('nav.menu') }}</span><span aria-hidden="true">{{ menuOpen ? '×' : '☰' }}</span>
      </button>
      <nav id="primary-nav" class="primary-nav" :class="{ 'is-open': menuOpen }" :aria-label="t('nav.primaryNavigation')">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" :aria-current="route.path === link.to || (link.to === '/produkte' && route.path.startsWith('/produkte/')) ? 'page' : undefined">{{ t(`nav.${link.key}`) }}</RouterLink>
        <div class="nav-actions">
          <RouterLink class="button button-small" to="/kontakt">{{ t('nav.call') }} <span aria-hidden="true">↗</span></RouterLink>
          <div class="language-switch" role="group" :aria-label="t('nav.language')">
            <button :aria-pressed="locale === 'de'" @click="setLanguage('de')">DE</button><span aria-hidden="true">|</span><button :aria-pressed="locale === 'en'" @click="setLanguage('en')">EN</button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header { position: relative; z-index: 10; background: var(--cream); border-bottom: 1px solid #e9e3db; }
.header-inner { min-height: 82px; display: flex; align-items: center; justify-content: space-between; gap: 26px; }
.brand { display: inline-flex; align-items: center; gap: 8px; min-width: 175px; color: var(--ink); text-decoration: none; }
.brand-logo { display: block; width: 150px; height: auto; }
.brand-copy { display: grid; justify-items: center; font-family: var(--serif); line-height: .86; }
.brand-copy strong { font-size: 22px; font-weight: 500; }
.brand-copy em { font-size: 29px; font-style: normal; }
.primary-nav { display: flex; align-items: center; gap: clamp(16px, 3vw, 42px); }
.primary-nav > a { position: relative; padding-block: 31px 28px; font-size: .92rem; text-decoration: none; }
.primary-nav > a::after { position: absolute; right: 100%; bottom: 20px; left: 0; height: 2px; background: var(--copper); content: ""; transition: right .2s ease; }
.primary-nav > a:hover::after, .primary-nav > a[aria-current="page"]::after { right: 0; }
.primary-nav > a[aria-current="page"] { color: var(--copper-dark); }
.nav-actions { display: flex; align-items: center; gap: 20px; }
.language-switch { display: flex; align-items: center; gap: 8px; font-size: .8rem; }
.language-switch button { padding: 8px 2px; border: 0; color: var(--muted); background: transparent; cursor: pointer; }
.language-switch button[aria-pressed="true"] { color: var(--ink); font-weight: 750; }
.menu-toggle { display: none; padding: 10px; border: 0; background: transparent; font-size: 25px; }
@media (max-width: 900px) {
  .header-inner { min-height: 72px; }
  .menu-toggle { display: block; margin-left: auto; cursor: pointer; }
  .primary-nav { position: absolute; top: 100%; right: 0; left: 0; display: none; padding: 12px 24px 22px; border-bottom: 1px solid var(--line); background: var(--cream); box-shadow: var(--shadow-menu); }
  .primary-nav.is-open { display: grid; gap: 0; }
  .primary-nav > a { padding: 12px 0; }
  .primary-nav > a::after { bottom: 6px; }
  .nav-actions { justify-content: space-between; padding-top: 12px; }
}
@media (max-width: 600px) {
  .brand { min-width: 0; }
  .brand-logo { width: 132px; }
  .brand-copy strong { font-size: 19px; }
  .brand-copy em { font-size: 25px; }
}
</style>
