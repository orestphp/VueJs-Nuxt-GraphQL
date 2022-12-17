<template>
  <v-row class="text-center" justify="center" align="center">
    <v-col cols="12" md="3">
      <v-btn
        v-for="item in items"
        :key="item.flag"
        fab
        :to="switchLocalePath(item.language)"
      >
        <v-img
          contain
          :src="item.flag"
          max-width="50px"
          max-height="50px"
          class="px-1 py-1"
        ></v-img>
      </v-btn>
      <v-form id="check-login-form" @submit.prevent="login">
        <v-img
          contain
          lazy-src="https://picsum.photos/id/11/10/6"
          max-height="300"
          max-width="200"
          class="py-3 mx-auto"
          src="https://picsum.photos/id/11/500/300"
        ></v-img>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="ID(E-mail)"
          persistent-hint
          outlined
          color="white"
        />
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          :label="$t('authLogin.password')"
          persistent-hint
          type="password"
          outlined
          color="white"
        />

        <nuxt-link
          :to="localePath('/auth/forgotpass')"
          style="color: white; text-decoration: none"
          >{{ $t('authLogin.resendPass') }}</nuxt-link
        >
        <v-btn
          form="check-login-form"
          type="submit"
          block
          elevation="5"
          large
          color="#F8B400"
          class="black--text my-4"
          >{{ $t('authLogin.login') }}</v-btn
        >
        <nuxt-link
          :to="localePath('/auth/register')"
          style="color: white; text-decoration: none"
          class="my-6"
          >{{ $t('authLogin.regNew') }}</nuxt-link
        >
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'LoginLayout',
  miniVariant: false,
  data() {
    return {
      items: [
        { flag: '/czflag.jpg', language: 'cs' },
        { flag: '/UKflag.jpg', language: 'en' },
        { flag: '/germanflag.jpg', language: 'de' },
      ],
      email: '',
      emailRules: [
        (v) => !!v || this.$t('authLogin.emailRules'),
        (v) => /^\S+@\S+\.\S+$/.test(v) || this.$t('authLogin.emailRules2'),
      ],
      password: '',
      passwordRules: [(v) => !!v || this.$t('authLogin.passwordRules')],
      token: localStorage.getItem('token'),
      errorDetails: '',
    }
  },
  methods: {
    async login() {
      // clear old data
      localStorage.removeItem('token');
      // start query
      const query = `
          mutation {
              login(input: {
                  email: "${this.email}"
                  password: "${this.password}"
              }) {
                  token
              }
          }`;

      try {
        const response = await this.$axios({
          method: "POST",
          data: { query },
          url: process.env.apiUrl
        });

        const data = response.data.data;

        if(typeof data.login !== 'undefined') {
          localStorage.setItem('token', data.login.token);
          await this.$router.push('/app/about');
        } else if(typeof data.errors !== 'undefined') {
          for (const i in data.errors) {
            this.errorDetails += data.errors[i].message + "\n";
            if(this.errorDetails.indexOf('Unauthenticated')) {
              await this.$router.push('/auth/login');
            }
          }
          // console.log('errors: ', this.errorDetails);
        }

      } catch (error) {
        // console.log(error);
      }
    },
  }
}
</script>

<style>
#check-login-form input[type=text] {
  padding-left: 10px !important;
}
#check-login-form input[type=password] {
  padding-left: 10px !important;
}
</style>
