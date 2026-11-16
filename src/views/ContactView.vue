<script setup>
import { useI18n } from 'vue-i18n'
import PageHero from '../components/common/PageHero.vue'

const { t } = useI18n()
const emailAddress = ['info', 'dampfbaeckerei-zwick.de'].join(String.fromCharCode(64))

function sendMessage(event) {
  const form = new FormData(event.currentTarget)
  const subject = form.get('subject') || t('contact.formDefaultSubject')
  const body = `${t('contact.formName')}: ${form.get('name')}\n${t('contact.formEmail')}: ${form.get('email')}\n\n${form.get('message')}`
  window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
</script>

<template>
  
  <section class="section wrap contact-page">
    <div class="contact-top">
      <div class="contact-list">
        <article v-for="item in ['address', 'phone', 'email', 'hours']" :key="item" class="contact-item">
          <span class="contact-icon" aria-hidden="true">{{ { address: '⌖', phone: '⌕', email: '✉', hours: '◷' }[item] }}</span>
          <div class="contact-copy">
            <h2>{{ t(`contact.${item}`) }}</h2>
            <p v-if="item === 'address'">{{ t('contact.addressValue') }}</p>
            <p v-else-if="item === 'hours'">{{ t('contact.hoursValue') }}</p>
            <a v-else-if="item === 'phone'" :href="`tel:${t('contact.phoneValue')}`">{{ t('contact.phoneValue') }}</a>
            <a v-else :href="`mailto:${emailAddress}`">{{ emailAddress }}</a>
          </div>
        </article>
      </div>

      <div class="message-panel">
        <h2>{{ t('contact.formTitle') }}</h2>
        <form class="contact-form" @submit.prevent="sendMessage">
          <label class="sr-only" for="contact-name">{{ t('contact.formName') }}</label>
          <input id="contact-name" name="name" autocomplete="name" :placeholder="t('contact.formName')" required />
          <label class="sr-only" for="contact-email">{{ t('contact.formEmail') }}</label>
          <input id="contact-email" name="email" type="email" autocomplete="email" :placeholder="t('contact.formEmail')" required />
          <label class="sr-only" for="contact-subject">{{ t('contact.formSubject') }}</label>
          <input id="contact-subject" class="full-field" name="subject" :placeholder="t('contact.formSubject')" />
          <label class="sr-only" for="contact-message">{{ t('contact.formMessage') }}</label>
          <textarea id="contact-message" class="full-field" name="message" rows="5" :placeholder="t('contact.formMessage')" required></textarea>
          <button class="button full-field" type="submit">{{ t('contact.formSend') }} <span aria-hidden="true">→</span></button>
          <p class="form-note full-field">{{ t('contact.formNote') }}</p>
        </form>
      </div>
    </div>

    <a class="map-card" href="https://www.google.com/maps/search/?api=1&query=Angerstra%C3%9Fe+1%2C+30851+Langenhagen" target="_blank" rel="noreferrer">
      <span class="map-road map-road-one" aria-hidden="true"></span>
      <span class="map-road map-road-two" aria-hidden="true"></span>
      <span class="map-river" aria-hidden="true"></span>
      <span class="map-marker" aria-hidden="true">⌖</span>
      <span class="map-label"><strong>{{ t('common.brand') }}</strong><br />Angerstraße 1 · 30851 Langenhagen</span>
      <span class="map-action">{{ t('contact.openMap') }} ↗</span>
    </a>
  </section>
</template>

<style scoped>
.contact-page { padding-block: 34px 56px; }
.contact-top { display: grid; grid-template-columns: minmax(285px, .78fr) minmax(0, 1.22fr); gap: 42px; margin-bottom: 34px; }
.contact-list { display: grid; align-content: start; }
.contact-item { display: grid; grid-template-columns: 64px 1fr; align-items: center; gap: 18px; padding: 12px 0; }
.contact-item + .contact-item .contact-copy { border-top: 1px solid var(--line); }
.contact-icon { display: grid; width: 58px; height: 58px; place-items: center; border-radius: 50%; color: var(--copper); background: #f1e9de; font-size: 1.7rem; }
.contact-copy { align-self: stretch; display: flex; flex-direction: column; justify-content: center; min-width: 0; padding: 8px 0; }
.contact-copy h2 { margin: 0 0 5px; font: 600 1.15rem var(--serif); }
.contact-copy p, .contact-copy a { margin: 0; color: var(--ink); line-height: 1.55; text-decoration: none; white-space: pre-line; }
.contact-copy a:hover { color: var(--copper); text-decoration: underline; }
.message-panel { padding-left: 38px; border-left: 1px solid var(--line); }
.message-panel > h2 { margin-bottom: 16px; font: 600 1.75rem var(--serif); }
.contact-form { display: grid; grid-template-columns: 1fr 1fr; gap: 11px 14px; }
.contact-form input, .contact-form textarea { width: 100%; min-width: 0; padding: 13px 15px; border: 1px solid #ddd5cb; border-radius: 8px; color: var(--ink); background: #fffdfa; font: inherit; }
.contact-form input { min-height: 48px; }
.contact-form textarea { min-height: 112px; resize: vertical; }
.contact-form input:focus, .contact-form textarea:focus { border-color: var(--copper); outline: 2px solid rgb(146 83 38 / 15%); }
.full-field { grid-column: 1 / -1; }
.contact-form .button { justify-self: start; min-width: 235px; }
.form-note { margin: -3px 0 0; color: var(--muted); font-size: .82rem; }
.map-card { position: relative; display: flex; min-height: 180px; align-items: center; justify-content: center; overflow: hidden; border: 1px solid #d9e0d2; border-radius: 14px; color: var(--ink); background-color: #e9eee3; background-image: linear-gradient(36deg, transparent 46%, #d4dfd1 47%, #d4dfd1 49%, transparent 50%), linear-gradient(145deg, transparent 58%, #d4dfd1 59%, #d4dfd1 61%, transparent 62%), linear-gradient(90deg, rgb(255 255 255 / 34%) 1px, transparent 1px), linear-gradient(rgb(255 255 255 / 34%) 1px, transparent 1px); background-size: auto, auto, 42px 42px, 42px 42px; text-decoration: none; }
.map-road { position: absolute; z-index: 1; display: block; height: 9px; border: 2px solid #fff9e9; border-radius: 99px; background: #e8c882; box-shadow: 0 0 0 1px rgb(207 180 119 / 40%); }
.map-road-one { top: 30%; left: -5%; width: 110%; transform: rotate(-8deg); }
.map-road-two { top: 54%; left: 7%; width: 85%; transform: rotate(13deg); }
.map-river { position: absolute; top: -45%; right: 15%; width: 38px; height: 190%; transform: rotate(19deg); border-radius: 50%; background: #b9dce0; }
.map-marker { position: relative; z-index: 2; display: grid; width: 48px; height: 48px; place-items: center; border: 4px solid white; border-radius: 50% 50% 50% 8px; transform: rotate(-45deg); color: white; background: #a94a37; box-shadow: 0 4px 10px rgb(35 25 15 / 18%); font-size: 1.5rem; }
.map-marker::first-letter { transform: rotate(45deg); }
.map-label { position: absolute; z-index: 2; top: calc(50% - 48px); left: calc(50% + 34px); padding: 9px 12px; border-radius: 7px; background: white; box-shadow: 0 2px 8px rgb(35 25 15 / 12%); font-size: .85rem; line-height: 1.45; }
.map-action { position: absolute; right: 15px; bottom: 13px; z-index: 2; padding: 8px 11px; border-radius: 99px; color: white; background: var(--copper); font-size: .8rem; }
@media (max-width: 760px) { .contact-top { grid-template-columns: 1fr; gap: 26px; } .message-panel { padding: 25px 0 0; border-top: 1px solid var(--line); border-left: 0; } }
@media (max-width: 520px) { .contact-page { padding-top: 22px; } .contact-form { grid-template-columns: 1fr; } .contact-form > * { grid-column: 1; } .contact-form .button { width: 100%; } .map-card { min-height: 160px; } .map-label { left: calc(50% + 25px); font-size: .75rem; } }
</style>
