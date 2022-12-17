<template>
  <v-row class="text-center" justify="center" align="center">
    <v-col cols="12" md="3">
      <v-app-bar fixed app elevation="0">
        <v-toolbar-title class="ml-2 justify-center">
          <nuxt-link
            :to="localePath('/auth/login')"
            style="text-decoration: none"
            ><v-btn fab elevation="0"
              ><v-icon color="#F8B400"
                >mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon
              ></v-btn
            ></nuxt-link
          >
          {{ $t('authPassRec.passRec') }}
        </v-toolbar-title>
      </v-app-bar>
      <v-container style="padding-top: 120px">
        <v-card class="py-8 px-4">
          <v-form>
            <p style="text-align: left">
              {{ $t('authPassRec.choosePassNew') }}:
            </p>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              :label="$t('authPassRec.password')"
              type="password"
              required
              outlined
              color="white"
            ></v-text-field>
            <p style="text-align: left">{{ $t('authPassRec.confirm') }}:</p>
            <v-text-field
              v-model="confirmPassword"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
              :label="$t('authPassRec.confirmPass')"
              type="password"
              required
              outlined
              color="white"
            ></v-text-field>
            <div class="d-flex justify-space-between text-caption">
              <div>
                <div class="grey--text mb-2">
                  {{ $t('authPassRec.passMatch') }}
                </div>
              </div>
            </div>
            <v-btn
              block
              elevation="3"
              large
              color="#F8B400"
              class="black--text my-4"
              >{{ $t('authPassRec.confirmBut') }}</v-btn
            >
          </v-form>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'PassRec',
  layout: 'LoginLayout',
  miniVariant: false,

  data() {
    return {
      valid: true,
      password: '',
      confirmPassword: '',
      passwordRules: [(v) => !!v || this.$t('authPassRec.passwordRules')],
      confirmPasswordRules: [
        (v) => !!v || this.$t('authPassRec.passwordRules2'),
      ],
    }
  },

  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword ||
        this.$t('authPassRec.passMatch')
    },
  },
}
</script>
