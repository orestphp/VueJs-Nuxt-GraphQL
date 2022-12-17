<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" xl="6" md="6" sm="12">
          <v-card height="103%" class="rounded-xl" color="black">
            <v-card-title
              class="text-xl-subtitle-1 text-uppercase font-weight-bold"
            >
              {{ $t('settings.baseSet') }}
            </v-card-title>
            <v-row class="">
              <v-col
                cols="6"
                sm="6"
                md="6"
                xl="6"
                class="ml-xl-3 ml-md-3 pb-0 mb-0"
              >
                <v-text-field
                  outlined
                  dense
                  :label="$t('settings.webName')"
                  :value="nameVal"
                  color="white"
                  clearable
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                sm="12"
                md="6"
                xl="6"
                class="ml-xl-3 ml-md-3 mt-0 pt-0 mb-0 pb-0"
              >
                <v-textarea
                  outlined
                  dense
                  :value="descVal"
                  color="white"
                  auto-grow
                  :label="$t('settings.shortDesc')"
                  clearable
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="ml-xl-3 ml-md-3 mt-0 pt-0 mb-0 pb-0">
                <v-text-field
                  outlined
                  dense
                  readonly
                  :label="$t('settings.adminEmail')"
                  value="loremipsum@ipsum.cz"
                  color="white"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-card-actions>
              <v-form ref="form" v-model="saved">
                <v-btn
                  color="#F8B400"
                  class="ml-xl-2 ml-md-2 black--text"
                  @click="save"
                >
                  {{ $t('settings.save') }}
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
            <v-row class="mx-1 mt-xl-3">
              <v-col
                v-for="item in items"
                :key="item.link"
                xl="4"
                md="4"
                sm="4"
                cols="12"
              >
                <v-card
                  color="gray"
                  class="rounded-lg my-md-4"
                  style="border: 1px solid #696969"
                  link
                  :to="localePath(item.link)"
                >
                  <v-card-actions>
                    <v-row no-gutters class="justify-center">
                      <v-col cols="12">
                        <v-icon class="text-h4 text-center" color="#F8B400">
                          {{ item.icon }}
                        </v-icon>
                      </v-col>
                    </v-row>
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-card-actions
                          class="text-xl-body-2 text-uppercase"
                          style="font-weight: 600"
                        >
                          {{ $t(item.title) }}
                        </v-card-actions>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6" xl="6">
          <v-card height="103%" class="rounded-xl" color="black">
            <v-card-title
              class="text-xl-subtitle-1 text-uppercase font-weight-bold"
            >
              {{ $t('settings.contForm') }}
            </v-card-title>
            <v-container>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :label="$t('settings.nameSur')"
                  color="white"
                  outlined
                  dense
                  required
                  clearable
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  color="white"
                  outlined
                  dense
                  required
                  clearable
                ></v-text-field>
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  :label="$t('settings.phoneNum')"
                  color="white"
                  outlined
                  dense
                  required
                  :hint="$t('settings.phoneHint')"
                  clearable
                ></v-text-field>
                <v-textarea
                  v-model="textArea"
                  class="pt-xl-1"
                  outlined
                  :label="$t('settings.bugDesc')"
                  auto-grow
                  :rules="textAreaRules"
                  color="white"
                  clearable
                ></v-textarea>

                <v-btn
                  :disabled="!valid"
                  color="#F8B400"
                  class="mr-4 black--text"
                  @click="validate"
                >
                  {{ $t('settings.send') }}
                </v-btn>
                <v-snackbar
                  v-model="snackbar"
                  color="yellow darken-2"
                  :timeout="timeout"
                  class="rounded-lg"
                  elevation="10"
                >
                  <div class="text-center black--text pa-0">
                    {{ $t(text) }}
                  </div>
                </v-snackbar>
              </v-form>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AdminSettings',
  components: {},
  layout: 'adminlayout',
  data() {
    return {
      // snackbar Odeslat
      snackbar: false,
      text: 'settings.bugSend',
      timeout: 2000,
      valid: true,
      // snackbar Uložit
      snackbarSave: false,
      textSave: 'settings.snackSave',
      saved: true,
      // permanent values
      nameVal: 'Lorem Ipsum',
      descVal:
        'Lorem ipsum lorem ipsum  lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
      // Card links
      items: [
        {
          link: '/admin/account',
          icon: 'mdi-account',
          title: 'settings.accCard',
        },
        { link: '/admin/home', icon: 'mdi-home', title: 'settings.homeCard' },
        {
          link: '/admin/plan',
          icon: 'mdi-clock-outline',
          title: 'settings.planCard',
        },
      ],

      // form validation
      name: '',
      nameRules: [(v) => !!v || this.$t('settings.nameRule')],
      email: '',
      emailRules: [
        (v) => !!v || this.$t('settings.emailRule'),
        (v) => /^\S+@\S+\.\S+$/.test(v) || this.$t('settings.emailRule2'),
      ],
      textArea: '',
      textAreaRules: [(v) => !!v || this.$t('settings.bugDescRule')],
      phone: '',
      phoneRules: [
        (v) => !!v || this.$t('settings.phoneNumRule'),
        (v) =>
          /([+]?\d{1,3}[. \s]?)?(\d{9}?)|([+]?\d{1,3} [.\s]?)?(\d{3}?) (\d{3}?) (\d{3}?)/.test(
            v
          ) || this.$t('settings.phoneNumRule2'),
      ],
    }
  },
  // Local storage title change
  mounted() {
    this.$store.commit('CHANGE_NAME', { name: this.$i18n.t('nav.settings') })
  },
  // Button methods Send, Validate, Reset form and print a success message snackbar.
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
