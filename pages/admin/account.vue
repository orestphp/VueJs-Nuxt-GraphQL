<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            height="75vh"
            class="rounded-xl"
            color="black"
          >
            <v-card-title class="text-xl-subtitle-1 text-uppercase justify-center font-weight-bold">
              {{$t('account.settings')}}
            </v-card-title>
            <div class="text-center my-xl-3">
              <v-avatar
                width="100px"
                height="100px"
                color="#F8B400">
                <v-icon
                  x-large>
                  mdi-account
                </v-icon>
              </v-avatar>
            </div>
            <div align="center">
              <v-col cols="12" xl="6" md="6" sm="6" class="ml-xl-3 pb-0 mb-0 float ">
                <v-row class="justify-center">

                  <v-col cols="6" xl="4" xm="6" md="6" >
                    <v-text-field
                      outlined
                      dense
                      :label="$t('account.name')"
                      :value="nameVal"
                      :rules="nameRules"
                      color="white"
                      clearable
                    ></v-text-field>
                  </v-col>
                  <v-col cols="6" xl="4" xm="6" md="6">
                    <v-text-field
                      outlined
                      dense
                      :label="$t('account.surname')"
                      :value="nameVal"
                      :rules="surnameRules"
                      color="white"
                      clearable
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" xl="4" md="6" sm="6" class="ml-xl-3 mt-0 pt-0 mb-0 pb-0">
                <v-text-field
                  :rules="emailRules"
                  outlined
                  dense
                  :value="emailVal"
                  color="white"
                  auto-grow
                  label="Email"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" xl="4" md="6" sm="6" class="ml-xl-3 mt-0 pt-0 mb-0 pb-0">
                <v-text-field
                  outlined
                  dense
                  :rules="phoneRules"
                  :value="nameVal"
                  color="white"
                  auto-grow
                  :label="$t('account.phoneNum')"
                  clearable
                ></v-text-field>
              </v-col>
              <v-col cols="12" xl="4" md="6" sm="6" class="ml-xl-3 mt-0 pt-0 mb-0 pb-0">
                <v-text-field
                  v-model="password"
                  outlined
                  dense
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  :label="$t('account.pass')"
                  :hint="$t('account.passHint')"
                  counter
                  color="white"
                  @click:append="show1 = !show1"

                ></v-text-field>
              </v-col>
              <v-card-actions class="justify-center ">
                <v-form
                  ref="form"
                  v-model="saved"
                >
                  <v-btn
                    color="#F8B400"
                    class="ml-xl-2 black--text"
                    @click="save"

                  >
                    {{$t('account.save')}}
                  </v-btn>
                  <v-snackbar
                    v-model="snackbarSave"
                    color="yellow darken-2"
                    :timeout="timeout"
                    class="rounded-lg"
                    elevation="10"
                  >
                    <div class="text-center black--text pa-0">
                      {{ $t(textSave) }}
                    </div>
                  </v-snackbar>
                </v-form>
              </v-card-actions>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AdminAccount',
  components: {},
  layout: 'adminlayout',
  data (){
  return {
    // snackbar Uložit
    snackbarSave: false,
    textSave: 'account.snackSave',
    saved: true,
    timeout: 2000,
    // permanent values
    nameVal: 'Lorem Ipsum',
    descVal: 'Lorem ipsum lorem ipsum  lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
    emailVal: 'lorem@ipsum.cz',

    // validation
    nameRules: [
      v => !!v || this.$t('account.nameRule'),
    ],
    surnameRules:[
      v => !!v || this.$t('account.surnameRules')
    ],
    emailRules: [
      v => !!v || this.$t('account.emailRules'),
      v => /^\S+@\S+\.\S+$/.test(v) || this.$t('account.emailRules2')
    ],
    phone: '',
    phoneRules: [
      v => !!v || this.$t('account.phoneNumRules'),
      v => /([+]?\d{1,3}[. \s]?)?(\d{9}?)|([+]?\d{1,3} [.\s]?)?(\d{3}?) (\d{3}?) (\d{3}?)/.test(v) || this.$t('account.phoneNumRules2')
    ],
    show1: false,
    password: 'Password',
    rules: {
      required: value => !!value || this.$t('account.passwordRules'),
      min: v => v.length >= 8 || this.$t('account.passwordRules2'),
    },
  }
},
  // Local storage title change
  mounted() {
    this.$store.commit('CHANGE_NAME', {name: this.$i18n.t('nav.account')})
  },
  // button methods
  methods: {
    validate() {
      this.$refs.form.validate()
      this.snackbar = true
      this.$refs.form.reset()
    },
    save() {
      this.snackbarSave = true
    },

  },
}
</script>
