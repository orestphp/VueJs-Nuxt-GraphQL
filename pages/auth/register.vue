<template>
  <v-container fluid class="fill-height">
    <v-row class="text-center" justify="center" align="center">
      <v-col cols="12" md="3">
        <v-app-bar fixed app>
          <v-toolbar-title class="ml-2 justify-center">
            <nuxt-link
              :to="localePath('/auth/login')"
              style="text-decoration: none"
            >
              <v-btn fab elevation="0">
                <v-icon color="#F8B400"
                  >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
                >
              </v-btn>
            </nuxt-link>
            Registration Page
          </v-toolbar-title>
        </v-app-bar>
        <v-form id="register-form" ref="form" v-model="valid" class="my-5" @submit.prevent="register">
          <p class="text-center">
            <v-avatar width="100px" height="100px" color="#F8B400">
              <v-icon x-large> mdi-account </v-icon>
            </v-avatar>
          </p>
          <v-text-field
            v-model="name"
            :rules="nameRules"
            :label="$t('authReg.name')"
            persistent-hint
            outlined
            color="white"
            required
          />
          <v-text-field
            v-model="surname"
            :rules="surnameRules"
            :label="$t('authReg.surname')"
            persistent-hint
            outlined
            color="white"
            required
          />
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            outlined
            color="white"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="[rules.required, rules.min]"
            :label="$t('authReg.password')"
            type="password"
            outlined
            required
            color="white"
          />
          <v-text-field
            v-model="confirmPassword"
            :rules="confirmPasswordRule"
            :label="$t('authReg.passwordConfirm')"
            type="password"
            outlined
            required
            color="white"
          />
          <v-select
            v-model="countrychoose"
            :label="$t('authReg.country')"
            :rules="countrychooseRules"
            outlined
            required
            color="white"
            :items="[
              {value:'CZ', text:'Česká republika'},
              {value:'DE', text:'Německo'},
              {value:'GB', text:'Velká Británie'}
            ]"
          ></v-select>
          <h3 class="my-3">{{ $t('authReg.billInfo') }}</h3>

          <v-text-field
            v-model="companyname"
            :rules="companynameRules"
            :label="$t('authReg.compName')"
            persistent-hint
            outlined
            required
            color="white"
          />
          <v-text-field
            v-model="VAT"
            :rules="VATRules"
            :label="$t('authReg.VAT')"
            persistent-hint
            outlined
            required
            color="white"
          />
          <v-text-field
            v-model="address"
            :rules="addressRules"
            :label="$t('authReg.address')"
            persistent-hint
            outlined
            required
            color="white"
          />
          <v-btn
            block
            color="#F8B400"
            class="black--text"
            type="submit"
            :disabled="!valid"
          >
            {{ $t('authReg.register') }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterPage',
  layout: 'LoginLayout',
  data() {
    return {
      name: '',
      surname: '',
      clipped: false,
      miniVariant: false,
      valid: true,
      // validation
      email: '',
      emailRules: [
        (v) => !!v || this.$t('account.emailRules'),
        (v) => /^\S+@\S+\.\S+$/.test(v) || this.$t('account.emailRules2'),
      ],
      nameRules: [(v) => !!v || this.$t('account.nameRule')],
      surnameRules: [(v) => !!v || this.$t('account.surnameRules')],
      countrychoose: '',
      countrychooseRules: [(v) => !!v || this.$t('authReg.countryRules')],
      companyname: '',
      companynameRules: [(v) => !!v || this.$t('authReg.companyRules')],
      VAT: '',
      VATRules: [(v) => !!v || this.$t('authReg.vatRules')],
      address: '',
      addressRules: [(v) => !!v || this.$t('authReg.addressRules')],
      password: '',
      rules: {
        required: (value) => !!value || this.$t('account.passwordRules'),
        min: (v) => v.length >= 8 || this.$t('account.passwordRules2'),
      },
      confirmPassword: '',
      confirmPasswordRule: [(this.password === this.confirmPassword) || this.$t('authReg.passwordMustMatch')],
    }
  },
  methods: {
    async register() {
      // TODO: *UserModel* "street, building_number, city, zip" Vs. *Frontend* "this.address" only
      const query = `
          mutation {
              register(input: {
                  name: "${this.name} ${this.surname}"
                  first_name: "${this.name}"
                  last_name: "${this.surname}"
                  country: "${this.countrychoose}"
                  email: "${this.email}"
                  password: "${this.password}"
                  password_confirmation: "${this.confirmPassword}"
                  company_name: "${this.companyname}"
                  ic: ${this.VAT}
                  street: "${this.address}"
              }) {
                  token
                  status
              }
          }`;

      try {
        const response = await this.$axios({
          method: "POST",
          data: { query },
          url: process.env.apiUrl
        });

        const data = response.data.data;

        if(typeof data.register !== 'undefined') {
          await localStorage.removeItem('token');
          await localStorage.setItem('token', data.register.token);
          await this.$router.push('/app/home');
        } else if(typeof data.errors !== 'undefined') {
          for (const i in data.errors) {
            this.errorDetails += data.errors[i].message + "\n";
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
#register-form input[type=text] {
  padding-left: 10px !important;
}
#register-form input[type=password] {
  padding-left: 10px !important;
}
</style>

