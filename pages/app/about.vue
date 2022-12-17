<template>
  <v-app class="">
    <layout-comp title="About"></layout-comp>
    <v-row justify="center">
      <v-container>
        <v-expansion-panels accordion class="py-1">
          <v-expansion-panel
            v-for="accord in accords"
            :key="accord.title"
          >
            <v-expansion-panel-header class="py-7">
              <v-col cols="2">
                <v-icon
                  style="position:absolute; left: 14px; top: 25px"
                  size="30px"
                  color="#F8B400"
                >mdi-card-account-details
                </v-icon>
              </v-col>
              {{$t(accord.title) }}
            </v-expansion-panel-header>
            <v-expansion-panel-content
            >
              <v-col cols="6" class="mx-auto">
                <p class="text-center">{{$t(accord.desc)}}</p>
              </v-col>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "AboutPage",
  layout: "AllroundLayout",


  data: () => ({
    miniVariant: false,
    // accordion content
    accords: [
      {
        title: 'appAbout.contacts',
        desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
      },
      {
        title: 'appAbout.projectInfo',
        desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
      },
      {
        title: 'appAbout.privacyPolicy',
        desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "
      },
    ],
  }),
}
</script>
<style scoped>
html {
  overflow-y: hidden;
}
</style>
