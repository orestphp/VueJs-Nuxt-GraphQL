<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template #activator="{ on, attrs }">
        <v-btn plain fab small class="mt-5" v-bind="attrs" v-on="on">
          <v-icon> mdi-chevron-right </v-icon>
        </v-btn>
      </template>
      <v-card height="100%" class="rounded-xl" color="black">
        <v-card-title class="text-h6 black--text amber darken-1">
          Upravit lorem ipsum (formulář - okno)
          <v-spacer></v-spacer>
          <v-btn plain color="black" fab small @click="reset">
            <v-icon> mdi-close </v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text class="pa-3">
          <v-container>
            <v-row>
              <v-col cols="10" sm="6" md="10" xl="10">
                <v-select label="Společnost" required color="white"></v-select>
              </v-col>
              <v-col xl="2" md="2" sm="2" cols="2">
                <v-btn class="float-right" fab small plain>
                  <v-icon> mdi-close </v-icon>
                </v-btn>
              </v-col>
              <v-col cols="10" sm="5" md="5" xl="5">
                <v-select label="Typ" color="white"></v-select>
              </v-col>
              <v-col cols="10" sm="5" md="5" xl="5">
                <v-select label="Stav" required color="white"></v-select>
              </v-col>
              <v-col cols="12" class="ma-0 pa-0 pb-2">
                <v-row justify="center">
                  <v-expansion-panels accordion>
                    <v-expansion-panel class="black">
                      <v-expansion-panel-header class="text-xl-body-1"
                        >Dodatečné nastavení</v-expansion-panel-header
                      >
                      <v-expansion-panel-content>
                        <v-row>
                          <v-col cols="5">
                            <v-text-field
                              label="Cena"
                              suffix="Kč"
                              color="white"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="5">
                            <v-text-field
                              label="Sleva"
                              color="white"
                              suffix="Kč"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="5">
                            <v-select
                              label="Datum"
                              color="white"
                              required
                            ></v-select>
                          </v-col>
                          <v-col cols="5">
                            <v-select
                              label="Zdroj"
                              color="white"
                              required
                            ></v-select>
                          </v-col>
                        </v-row>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#F8B400" text type="submit"> Přidat </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'DialogOnChevron',
  components: {},
  data: () => ({
    dialog: false,
  }),
  methods: {
    reset() {
      this.dialog = false
    },
  },
}
</script>
