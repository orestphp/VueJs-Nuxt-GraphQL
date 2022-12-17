<template>
  <v-app>
    <v-app-bar app elevation="3">
      <v-img
        src="/logo_white.svg"
        style="position: absolute; height: 55px; width: 270px; left: 30px"
      ></v-img>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'HomeLayout',
  data() {
    return {
      miniVariant: false,
    }
  },
}
</script>
