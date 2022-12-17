<template>
  <v-row>
    <v-col xl="6" md="6" sm="3" cols="6">
      <nuxt-link
        :to="localePath('/app/user-profile-view')"
        style="text-decoration: none"
      >
        <v-card
          :class="radius"
          height="120px"
          width="130px"
          outlined
          elevation="4"
          rounded
          color="black"
          class="mx-3"
          link
        >
          <v-row>
            <v-list-item two-line class="py-2">
              <v-list-item-content>
                <v-list-item-title class="pl-3">
                  <p
                    class="white--text text-uppercase font-weight-thin"
                    style="font-size: small"
                  >
                    {{ $t('appHome.profile') }}
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-row>
              <v-list-item two-line class="py-1">
                <v-list-item-content>
                  <v-col cols="6">
                    <v-list-item-title> </v-list-item-title>
                  </v-col>
                  <v-col cols="6">
                    <v-list-item-avatar style="bottom: 20px">
                      <v-list-item-avatar class="mr-0 pb-3">
                        <v-icon color="#F8B400" size="30">mdi-account </v-icon>
                      </v-list-item-avatar>
                    </v-list-item-avatar>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
            </v-row>
          </v-row>
        </v-card>
      </nuxt-link>
    </v-col>
    <v-col xl="6" md="6" sm="3" cols="6">
      <nuxt-link :to="localePath('/app/plan')" style="text-decoration: none">
        <CardComponent
          label="appHome.plan"
          color="black"
          number="34"
          icon="mdi-archive"
        ></CardComponent>
      </nuxt-link>
    </v-col>
    <v-col xl="6" md="6" sm="3">
      <nuxt-link
        :to="localePath('/app/projects')"
        style="text-decoration: none"
      >
        <CardComponent
          label="appHome.projects"
          color="black"
          :number="projectsCount"
          icon="mdi-folder-open"
        ></CardComponent>
      </nuxt-link>
    </v-col>
    <v-col xl="6" md="6" sm="3" cols="6">
      <nuxt-link
        :to="localePath('/app/tutorials')"
        style="text-decoration: none"
      >
        <CardComponent
          label="appHome.tutorials"
          color="black"
          icon="mdi-lightbulb"
        ></CardComponent>
      </nuxt-link>
    </v-col>
    <v-col xl="6" md="6" sm="3" cols="6">
      <nuxt-link
        :to="localePath('/app/hardware')"
        style="text-decoration: none"
      >
        <CardComponent
          label="appHome.hardware"
          color="black"
          icon="mdi-toolbox"
        ></CardComponent>
      </nuxt-link>
    </v-col>
    <v-col xl="6" md="6" sm="3" cols="6">
      <nuxt-link :to="localePath('/app/about')" style="text-decoration: none">
        <v-card
          :class="radius"
          height="120px"
          width="130px"
          outlined
          elevation="4"
          rounded
          class="mx-3"
          link
          color="#FFAB00"
        >
          <v-row>
            <v-list-item two-line class="py-2">
              <v-list-item-content>
                <v-list-item-title class="pl-3">
                  <p
                    class="black--text text-uppercase"
                    style="font-size: small; font-weight: 500"
                  >
                    {{ $t('appHome.aboutUs') }}
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-row>
              <v-list-item two-line>
                <v-list-item-content>
                  <v-col cols="7">
                    <v-list-item-title class="pl-3">
                      <p
                        class="white--text"
                        style="
                          font-size: 30px;
                          font-weight: bold;
                          position: relative;
                          bottom: 5px;
                        "
                      ></p>
                    </v-list-item-title>
                  </v-col>
                  <v-col cols="5">
                    <v-list-item-avatar style="bottom: 20px">
                      <v-list-item-avatar class="mr-0 pb-3">
                        <v-icon color="white" size="30">mdi-map-marker </v-icon>
                      </v-list-item-avatar>
                    </v-list-item-avatar>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
            </v-row>
          </v-row>
        </v-card>
      </nuxt-link>
    </v-col>
    <v-col xl="6" md="6" sm="3" cols="6">
      <nuxt-link :to="localePath('/app/queue')" style="text-decoration: none">
        <v-card
          :class="radius"
          height="120px"
          width="130px"
          outlined
          elevation="4"
          rounded
          class="mx-3"
          link
          style="
            background: transparent;
            border-style: solid;
            border-color: #f8b400;
          "
        >
          <v-row>
            <v-list-item two-line class="py-2">
              <v-list-item-content>
                <v-list-item-title class="pl-3">
                  <p
                    class="white--text text-uppercase font-weight-thin"
                    style="font-size: small"
                  >
                    {{ $t('appHome.queue') }}
                  </p>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-row>
              <v-list-item two-line class="py-1">
                <v-list-item-content>
                  <v-col cols="7">
                    <v-list-item-title class="pl-2">
                      <p
                        class="white--text"
                        style="
                          font-size: 30px;
                          font-weight: bold;
                          position: absolute;
                          bottom: 55px;
                        "
                      >
                        3
                      </p>
                    </v-list-item-title>
                  </v-col>
                  <v-col cols="5">
                    <v-list-item-avatar style="bottom: 20px">
                      <v-list-item-avatar class="mr-0 pb-3">
                        <v-icon color="#F8B400" size="30"
                          >mdi-timer-sand
                        </v-icon>
                      </v-list-item-avatar>
                    </v-list-item-avatar>
                  </v-col>
                </v-list-item-content>
              </v-list-item>
            </v-row>
          </v-row>
        </v-card>
      </nuxt-link>
    </v-col>
  </v-row>
</template>

<script>
import CardComponent from '@/components/CardComp'

export default {
  name: 'HomePage',
  components: { CardComponent },
  layout: 'HomeLayout',
  data: () => ({
    projectsCount: 0,
    // Rounded
    model: 1,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
  }),
  // rounded function
  computed: {
    radius() {
      let rounded = 'rounded'
      const value = this.rounded[this.model]
      if (value !== 'md') {
        rounded += `-${value}`
      }
      return rounded
    },
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const query = `
      query {
          ownProjectsCount
      }`;

      try {
        const response = await this.$axios({
          method: 'POST',
          data: { query },
          url: process.env.apiUrl,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });

        const data = response.data.data;
        if(typeof data === 'undefined' || typeof data.ownProjectsCount !== 'undefined') {
          this.projectsCount = data.ownProjectsCount;
        } else {
          // 200 error
          // console.log(data.ownProjectsCount);
        }

      } catch (error) {
        // console.log(error);
      }
    },
  }
}
</script>

<style>
  html {
    overflow-y: unset;
  }

  #app {
    background: url('/bg.jpg') no-repeat center center fixed;
    background-size: cover;
  }
</style>
