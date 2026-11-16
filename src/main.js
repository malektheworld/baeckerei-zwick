import { createApp } from 'vue'
import { watch } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import de from './locales/de.json'
import en from './locales/en.json'
import './styles/variables.css'
import './styles/global.css'
import './styles/typography.css'
import './styles/utilities.css'

const savedLocale = localStorage.getItem('zwick-locale')
const i18n = createI18n({
  legacy: false,
  locale: savedLocale === 'en' ? 'en' : 'de',
  fallbackLocale: 'de',
  messages: { de, en },
})

const app = createApp(App)
app.use(i18n)
app.use(router)
const updatePageMeta = (route = router.currentRoute.value) => {
  const key = route.name || 'notFound'
  document.title = `${i18n.global.t(`meta.${key}`)} | ${i18n.global.t('common.brand')}`
  document.documentElement.lang = i18n.global.locale.value
  document.querySelector('meta[name="description"]')?.setAttribute('content', i18n.global.t(`descriptions.${key}`))
}
router.afterEach((route) => updatePageMeta(route))
watch(() => i18n.global.locale.value, () => updatePageMeta())
app.mount('#app')
