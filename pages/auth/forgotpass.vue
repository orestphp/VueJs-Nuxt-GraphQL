<template>
  <v-row class="text-center" justify="center" align="center">
    <v-col cols="12" md="3">
      <v-app-bar fixed app elevation="0">
        <v-toolbar-title class="ml-2 justify-center">
          <nuxt-link
            :to="localePath('/auth/login')"
            style="text-decoration: none"
          >
            <v-btn elevation="0">
              <v-icon fab color="#F8B400"
                >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
              >
            </v-btn>
          </nuxt-link>
          {{ $t('authPassRec.passRec') }}
        </v-toolbar-title>
      </v-app-bar>
      <v-container style="padding-top: 120px">
        <v-card class="py-8 px-4">
          <v-form>
            <p style="text-align: left">E-mail:</p>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              outlined
              required
              dark
              color="white"
            ></v-text-field>
            <div class="d-flex justify-space-between text-caption">
              <div>
                <div class="grey--text mb-2">
                  {{ $t('authResetPass.useOldEmail') }}
                </div>
              </div>
            </div>
            <v-btn
              block
              elevation="3"
              large
              color="#F8B400"
              class="black--text my-4"
              @click="sendEmail"
              >{{ $t('authResetPass.confirm') }}
            </v-btn>
          </v-form>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'ForgotPass',
  layout: 'LoginLayout',
  miniVariant: false,

  data() {
    return {
      valid: true,
      miniVariant: false,
      email: '',
      emailRules: [
        (v) => !!v || this.$t('authResetPass.emailRule'),
        (v) => /^\S+@\S+\.\S+$/.test(v) || this.$t('authResetPass.emailRule2'),
      ],
    }
  },
  methods: {
    async sendEmail() {
      const query = `
        mutation {
            forgotPassword(input: {
                email: "${this.email}"
                reset_password_url: {
                    url: "${process.env.apiUrl}/reset-password?email=__EMAIL__&token=__TOKEN__"
                }
            }) {
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
            'From': this.$store.state.mailFrom,
          }
        })

        const data = response.data.data

        if (typeof data.login !== 'undefined') {
          localStorage.setItem('token', data.login.token);
          await this.$router.push('/auth/login')
        } else if (typeof data.errors !== 'undefined') {
          for (const i in data.errors) {
            this.errorDetails += data.errors[i].message + '\n'
          }
          // console.log('errors: ', this.errorDetails);
        }
      } catch (error) {
        // console.error(error);
      }
    },
  },
} // end script
</script>
