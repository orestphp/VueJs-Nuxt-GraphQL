<template>
  <v-app>
    <v-main>
      <v-app-bar color="#FFAB00" app>
        <v-row>
          <v-col cols="12" xl="2" md="2" sm="4">
            <v-row>
              <v-img
                style="background: black"
                src="/logo_white.svg"
                height="65px"
                contain
              ></v-img>
            </v-row>
          </v-col>
          <v-col class="d-none d-sm-block" xl="10" md="10" sm="8">
            <v-row style="position: relative" class="ml-2">
              <nuxt-link
                :to="localePath('/admin/home')"
                style="text-decoration: none"
              >
                <v-btn
                  fab
                  plain
                  elevation="0"
                  x-small
                  class="mt-4"
                  color="black"
                >
                  <v-icon
                    plain
                    class="white--text"
                    style="font-weight: 600; bottom: 2px"
                  >
                    mdi-{{ `chevron-${miniVariant ? 'left' : 'left'}` }}
                  </v-icon>
                </v-btn>
              </nuxt-link>
              <v-col xl="10">
                <v-toolbar-title
                  class="mt-2 white--text text-uppercase"
                  style="font-weight: 600; font-size: 15px"
                >
                  {{ name }}
                </v-toolbar-title>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        src="/bg.jpg"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
        class="navigation-drawer__full-height"
      >
        <v-list dense nav>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="localePath(item.link)"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ $t(item.title) }} </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-spacer />
        <div class="w-100 text-center">
          <v-btn icon @click.stop="miniVariant = !miniVariant">
            <v-icon
              >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
            >
          </v-btn>
        </div>

        <v-list dense>
          <v-list-item
            class="text-left"
            link
            :to="localePath('/admin/account')"
          >
            <v-list-item-action>
              <v-icon> mdi-account-circle </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ $t('nav.account') }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list>
            <v-list-item>
              <v-list-item-title class="mr-xl-5 ma-0 pa-0">
                <locale-switch></locale-switch>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list>
      </v-navigation-drawer>
      <v-col cols="12" class="mt-4">
        <Nuxt />
      </v-col>
    </v-main>
    <speed-dial> </speed-dial>
  </v-app>
</template>

<script>
export default {
  name: 'AdminLayout',
  data() {
    return {
      miniVariant: false,
      clipped: false,
      drawer: true,
      right: true,
      rightDrawer: false,
      items: [
        { title: 'nav.home', link: '/admin/home', icon: 'mdi-home-outline' },
        {
          title: 'nav.database',
          link: '/admin/database',
          icon: 'mdi-database-outline',
        },
        { title: 'nav.plan', link: '/admin/plan', icon: 'mdi-clock-outline' },
        {
          title: 'nav.tutorials',
          link: '/admin/tutorials',
          icon: 'mdi-lightbulb-outline',
        },
        {
          title: 'nav.aboutUs',
          link: '/admin/about',
          icon: 'mdi-information-outline',
        },
        {
          title: 'nav.standarts',
          link: '/admin/normy',
          icon: 'mdi-chart-donut',
        },
        {
          title: 'nav.settings',
          link: '/admin/settings',
          icon: 'mdi-cog-outline',
        },
      ],
    }
  },
  computed: {
    // Local storage title change getter
    name() {
      return this.$store.getters.getPageName
    },
  },
}
</script>

<style>
.navigation-drawer__full-height .v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
}
</style>
