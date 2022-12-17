<template>
  <v-app dark>
    <v-container>
      <v-main>
        <Nuxt />
      </v-main>
      <v-footer color="transparent" bottom absolute padless class="mb-3">
        <span class="mx-auto"
          ><nuxt-link
            :to="localePath('/app/about')"
            style="color: lightgray; text-decoration: none"
            >{{ $t('authLogin.aboutUs') }}</nuxt-link
          ></span
        >
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'LoginLayout',
  miniVariant: false,
  data() {
    return {
      fixed: false,
    }
  },
}
</script>
