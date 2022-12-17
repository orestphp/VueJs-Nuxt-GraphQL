<template>
  <v-app>
    <layout-comp title="User Profile"></layout-comp>
    <v-row class="ma-0">
      <v-col
        cols="12"
      >
        <v-container>
          <p class="text-center">
            <v-avatar color="#F8B400">
              <v-icon>
                mdi-account
              </v-icon>
            </v-avatar>
          </p>
          <v-form class="pt-2">
            <v-btn
              color="#F8B400"
              block
              class="black--text"
              @click="logout"
            >
              {{ $t('userProfileView.logout') }}
            </v-btn>
            <p class="text-center pt-2">
              <nuxt-link :to="localePath('/auth/forgotpass')" style="color: white; text-decoration: none">
                {{ $t('userProfileView.changePass') }}
              </nuxt-link>
            </p>
            <nuxt-link :to="localePath('/app/user-profile')" style="color: white; text-decoration: none">
              <p class="text-center ">
                {{ $t('userProfileView.changeCred') }}
              </p>
            </nuxt-link>
          </v-form>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "UserProfileView",
  layout: "AllroundLayout",
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

<style scoped>
body {
  overflow-y: hidden;
}
</style>
