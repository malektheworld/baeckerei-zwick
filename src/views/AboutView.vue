<script setup>
import { useI18n } from 'vue-i18n'
import vintageBakery from '../../img/about/bakery-vintage-street.png'
import bakeryInterior from '../../img/about/bakery-zwick.png'

const { t } = useI18n()
</script>

<template>

  <main class="about-layout section wrap">
    <section class="about-story">
      <div class="story-inner">
      <p class="eyebrow">{{ t('about.storyEyebrow') }}</p>
      <h2>{{ t('about.storyTitle') }}</h2>
      <p class="story-promise">{{ t('about.storyPromise') }}</p>
      <p>{{ t('about.storyP1') }}</p>
      <p>{{ t('about.storyP2') }}</p>
      <p>{{ t('about.storyP3') }}</p>
      <div class="story-invitation">
        <p class="eyebrow">{{ t('about.invitationEyebrow') }}</p>
        <h3>{{ t('about.invitationTitle') }}</h3>
        <p>{{ t('about.invitationText') }}</p>
      </div>
      </div>
    </section>

    <section class="about-photos" :aria-label="t('about.photosLabel')">
      <figure class="about-photo about-photo-vintage">
        <img :src="vintageBakery" :alt="t('about.vintageAlt')" />
        <figcaption>{{ t('about.vintageCaption') }}</figcaption>
      </figure>
      <figure class="about-photo about-photo-interior">
        <img :src="bakeryInterior" :alt="t('about.bakeryExteriorAlt')" />
        <figcaption>{{ t('about.bakeryExteriorCaption') }}</figcaption>
      </figure>
    </section>
  </main>
</template>

<style scoped>
.about-layout { display: grid; direction: ltr; grid-template-areas: "story photos"; grid-template-columns: minmax(0, 1.2fr) minmax(260px, .8fr); gap: clamp(32px, 5vw, 72px); align-items: center; padding-block: 42px 54px; }
.about-story { grid-area: story; }
.about-photos { display: grid; grid-area: photos; grid-template-columns: 1fr; gap: 24px; }
.about-photo { position: relative; min-width: 0; height: clamp(250px, 30vw, 380px); margin: 0; overflow: hidden; border-radius: var(--radius-md); background: var(--paper); box-shadow: var(--shadow-menu); }
.about-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
.about-photo-vintage img { object-position: center 58%; filter: sepia(.12); }
.about-photo-interior img { object-position: 62% center; }
.about-photo figcaption { position: absolute; right: 0; bottom: 0; left: 0; padding: 32px 22px 18px; color: #fff; background: linear-gradient(transparent, rgb(25 19 15 / 78%)); font: italic 1.25rem var(--serif); }
.about-story { min-width: 0; }
.story-inner { max-width: 820px; }
.story-inner .eyebrow { margin-bottom: 10px; color: var(--copper); }
.story-inner h2 { margin-bottom: 24px; font-size: clamp(2rem, 4vw, 3rem); }
.story-inner > p:not(.eyebrow) { max-width: 760px; color: #51463c; font-size: 1.05rem; line-height: 1.8; }
.story-inner .story-promise { margin: 29px 0 16px; padding-left: 20px; border-left: 3px solid var(--copper); color: var(--ink); font-weight: 700; }
.story-invitation { max-width: 620px; margin-top: 30px; padding: 22px 25px; border-left: 3px solid var(--copper); border-radius: 0 var(--radius-md) var(--radius-md) 0; background: #f4f0e9; }
.story-invitation .eyebrow { margin-bottom: 6px; color: var(--copper); }
.story-invitation h3 { margin-bottom: 8px; font: italic 1.55rem/1.2 var(--serif); }
.story-invitation > p:last-child { margin: 0; color: #51463c; line-height: 1.65; }
@media (max-width: 650px) {
  .about-layout { grid-template-areas: "story" "photos"; grid-template-columns: 1fr; gap: 28px; padding-block: 26px 36px; }
  .about-photos { gap: 20px; }
  .about-photo { height: 300px; }
  .story-inner > p:not(.eyebrow) { font-size: 1rem; }
}
</style>
