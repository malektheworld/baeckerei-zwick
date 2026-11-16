<script setup>
import { useI18n } from 'vue-i18n'
import PageHero from '../components/common/PageHero.vue'
const props = defineProps({ type: { type: String, required: true } })
const { t } = useI18n()
const imprintItems = ['operator', 'address', 'contact', 'register']
const titleKey = props.type === 'imprint' ? 'legal.imprintTitle' : 'legal.privacyTitle'
const introKey = props.type === 'imprint' ? 'legal.imprintIntro' : 'legal.privacyIntro'
</script>
<template>
  <PageHero compact :eyebrow="t('footer.legal')" :title="t(titleKey)" />
  <section class="section wrap legal-content"><p>{{ t(introKey) }}</p><ul v-if="type === 'imprint'"><li v-for="item in imprintItems" :key="item">{{ t(`legal.${item}`) }}</li></ul><ul v-else><li>{{ t('legal.hosting') }}</li><li>{{ t('legal.rights') }}</li></ul></section>
</template>

<style scoped>
.legal-content { min-height: 360px; }
.legal-content > p { max-width: 780px; font-size: 1.1rem; }
.legal-content ul { display: grid; max-width: 700px; gap: 14px; padding-left: 22px; color: var(--muted); }
</style>
