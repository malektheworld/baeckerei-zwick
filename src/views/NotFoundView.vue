<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
<template><section class="not-found wrap"><p class="eyebrow">404</p><h1>{{ t('notFound.title') }}</h1><p>{{ t('notFound.text') }}</p><RouterLink class="button" to="/">{{ t('common.backHome') }}</RouterLink></section></template>

<style scoped>
.not-found { display: flex; min-height: 48vh; flex-direction: column; align-items: flex-start; justify-content: center; }
.not-found h1 { font-size: clamp(2.7rem, 6vw, 4.5rem); }
</style>
