<template>
  <v-app-bar fixed app>
    <v-row>
      <v-col xl="1" md="1" sm="1">

          <nuxt-link :to="localePath('/app/home')" style="text-decoration: none">
            <v-btn
              fab
              elevation="0"
              small
              plain
              class="py-7"
              style="background: transparent"
            ><v-icon plain color="#F8B400">mdi-{{ `chevron-${miniVariant ? 'left' : 'left'}` }}</v-icon>
            </v-btn>
          </nuxt-link>
      </v-col>
      <v-col xl="9" md="9" sm="6">
        <v-toolbar-title class="py-3">
          {{$t(title)}}
        </v-toolbar-title>
      </v-col>
      <v-col v-if="items" xl="2" md="2" sm="5" class="d-flex justify-end">
        <v-menu>
          <template #activator="{ on, attrs }">
            <v-btn
              fab
              elevation="0"
              plain
              v-bind="attrs"
              color="black"
              small
              class="py-7"
              v-on="on"
            >
              <v-icon
                color="#F8B400"
              >mdi-dots-vertical
              </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              link
            >
              <v-list-item-title>{{ $t(item.name) }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-tooltip right>
          <template #activator="{ on, attrs }">
            <v-btn
              fab
              elevation="0"
              plain
              v-bind="attrs"
              color="black"
              small
              class="py-7"
              @click="logout"
              v-on="on"
            >
              <v-icon aria-hidden="false" v-bind="attrs" color="#D59A00">
                mdi-logout
              </v-icon>
            </v-btn>
          </template>
          <span>Logout</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "LayoutComponent",
  components: {},
  props: {
    title: {
      type: String,
      default: null,
    },
    items:{
      type: Array,
      default: () => [
        { name: 'appItems.rename' },
        { name: 'appItems.delete' },
      ],
    }
  },
  data: () => ({
    miniVariant: false,
  }),
  methods: {
    async logout() {
      const query = `
          mutation {
              logout {
                  status
                  message
              }
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

        await localStorage.removeItem('token');
        const data = response.data.data;
        if(typeof data === 'undefined' || typeof data.logout !== 'undefined') {
          await this.$router.push('/auth/login');
        } else {
          const data = response.errors;
          for (const i in data.errors) {
            this.errorDetails += data.errors[i].message + "\n";
            if(this.errorDetails.indexOf('Unauthenticated')) {
              await this.$router.push('/auth/login');
            }
          }

        }

      } catch (error) {
        // console.log(error);
      }
    },
  }

}
</script>

