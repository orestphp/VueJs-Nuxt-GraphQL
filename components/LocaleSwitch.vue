<template>
  <div style="pointer-events: initial">
    <v-btn
      v-for="locale in languageMenu"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      link
      text
      class="ma-0 pa-0"
    >
      {{ locale.code }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'LocaleSwitch',
  computed: {
    languageMenu() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
