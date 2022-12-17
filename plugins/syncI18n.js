import Vue from 'vue'

if (!Vue.vuetify_i18n) {
  Vue.vuetify_i18n = true
  Vue.mixin({
    watch: {
      '$i18n.locale'(newLocale) {
        this.$vuetify.lang.current = newLocale
      },
    },
    beforeCreate() {
      if (this.$i18n && this.$i18n.locale) {
        this.$vuetify.lang.current = this.$i18n.locale
      }
    },
  })
}
