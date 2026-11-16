<script setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'

const { locale, t } = useI18n()
watch(locale, (value) => { document.documentElement.lang = value }, { immediate: true })
</script>

<template>
  <a class="skip-link" href="#main">{{ t('common.skip') }}</a>
  <SiteHeader />
  <main id="main"><RouterView /></main>
  <SiteFooter />
</template>

<style scoped>
.skip-link { position: absolute; z-index: 20; top: -100px; left: 12px; padding: 12px 18px; background: white; }
.skip-link:focus { top: 12px; }
</style>
