<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          v-for="item in cards"
          :key="item.cardtitle"
          cols="12"
          xl="4"
          md="4"
          sm="12"
        >
          <thin-card-comp
            :title="item.cardtitle"
            :bignum="item.bignum"
            :transparent="item.transparent"
            :styling="item.styling"
            :icon-right="item.iconRight"
          ></thin-card-comp>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <!--          <v-card-->
          <!--            class="rounded-xl"-->
          <!--            outlined-->
          <!--            color="gray"-->
          <!--            rounded-->
          <!--            min-width="300px"-->
          <!--            link-->
          <!--          >-->
          <!--            <p class="text-center my-16">-->
          <!--              <v-btn-->
          <!--                outlined-->
          <!--                fab-->
          <!--                disabled-->

          <!--              >-->
          <!--                <v-icon-->
          <!--                  size="50px"-->
          <!--                  class="mx-auto"-->
          <!--                >mdi-plus-->
          <!--                </v-icon>-->
          <!--              </v-btn>-->
          <!--            </p>-->
          <!--          </v-card>-->
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card height="100%" class="rounded-xl" color="black">
            <v-card-title class="text-h6 black--text amber darken-1">
              {{ $t('tutorials.tutorial') }}
            </v-card-title>

            <v-card-text>
              <v-list color="black">
                <v-list-item
                  v-for="(folder, index) in folders"
                  :key="folder.title"
                  link
                  style="border-bottom: 1px solid gray"
                >
                  <v-col>
                    <v-row>
                      <v-list-item-avatar>
                        <v-icon color="white">mdi-file </v-icon>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title
                          style="font-weight: bold"
                          v-text="folder.title"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          v-text="folder.subtitle"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-row>
                          <v-btn icon download href="file.pdf">
                            <v-icon color="white">mdi-download </v-icon>
                          </v-btn>
                          <v-btn icon @click="deleteFolder(index)">
                            <v-icon color="white">mdi-close </v-icon>
                          </v-btn>
                        </v-row>
                      </v-list-item-action>
                    </v-row>
                  </v-col>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-dialog v-model="dialog" width="600">
              <template #activator="{ on, attrs }">
                <div class="text-center my-xl-14 my-md-14">
                  <v-btn outlined fab color="grey" v-bind="attrs" v-on="on">
                    <v-icon size="50px" class="mx-auto">mdi-plus </v-icon>
                  </v-btn>
                </div>
              </template>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                @submit.prevent="addMetodika"
              >
                <v-card class="rounded-xl black">
                  <v-card-title class="text-h6 black--text amber darken-1">
                    {{ $t('tutorials.tutorial') }}
                  </v-card-title>
                  <v-card-text>
                    <v-file-input
                      v-model="addFile"
                      :rules="rules"
                      counter
                      show-size
                      color="white"
                      class="mt-xl-4"
                    ></v-file-input>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="#FFFFFF" text @click="reset">
                      {{ $t('tutorials.cancel') }}
                    </v-btn>
                    <v-btn color="#F8B400" text type="submit">
                      {{ $t('tutorials.add') }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-form>
            </v-dialog>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#F8B400" text>
                {{ $t('tutorials.save') }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AdminTutorials',
  components: {},
  layout: 'adminlayout',
  data() {
    return {
      // Validation, dialog and file upload
      valid: false,
      dialog: false,
      addFile: null,
      cards: [
        {
          // Card contents
          cardtitle: 'metodiky cze',
          bignum: '2',
          styling:
            'text-xl-h4 text-md-h4 text-sm-h4 ml-sm-3  pb-md-0 text-h3 ml-3 mb-xl-2',
          transparent: true,
          iconRight: true,
        },
        {
          cardtitle: 'Tutorials',
          bignum: '2',
          styling:
            'text-xl-h4 text-md-h4 text-sm-h4 ml-sm-3 text-h3 ml-3 mb-xl-2',
          iconRight: true,
        },
        {
          cardtitle: 'Anwesungen GER',
          bignum: '2',
          styling:
            'text-xl-h4 text-md-h4 text-sm-h4 ml-sm-3 text-h3 ml-3 mb-xl-2',
          iconRight: true,
        },
      ],
      folders: [
        // Uploaded files
        {
          title: 'Lorem Ipsum sit dolor: PDF',
          subtitle: 'Language:CZE',
        },
        {
          title: 'Lorem Ipsum s: PDF',
          subtitle: 'Language:CZE',
        },
      ],
      rules: [
        // File and file size validation
        (value) =>
          !value || value.size < 160000000 || this.$i18n.t('tutorial.rule'),
        (v) => !!v || this.$i18n.t('tutorials.empty'),
      ],
    }
  },
  // Local storage title change
  mounted() {
    this.$store.commit('CHANGE_NAME', { name: this.$i18n.t('nav.tutorials') })
  },

  methods: {
    // Button method to delete a folder
    deleteFolder(index) {
      this.folders.splice(index, 1)
    },
    // Button method to reset a dialog window after submitting.
    reset() {
      this.$refs.form.reset()
      this.dialog = false
    },
    // Button method to submit and save uploaded file.
    addMetodika() {
      this.folders.push({
        title: this.addFile.name,
        subtitle: 'Language:CZE',
      })
      this.dialog = false
    },
  },
}
</script>
