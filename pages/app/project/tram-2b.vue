<template>
  <v-app>
    <layout-comp title="appProject.tram2b"></layout-comp>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header class="py-6">
          <v-col cols="2">
            <v-icon
              style="position:absolute; left: 14px; top: 20px"
              size="30px"
              color="#F8B400"
            >mdi-square-edit-outline
            </v-icon>
          </v-col>
          {{$t('appProject.tram2b')}}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="pt-6">
          <v-row class="justify-end align-center">
            <v-row>
              <v-col cols="10">
                <p
                  style="color: gray"
                >{{$t('appProject.measurementMm')}}:</p>
              </v-col>
              <v-col cols="2">
                <v-dialog
                  v-model="dialog1"
                  width="300"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      elevation="0"
                      plain
                      fab
                      small
                      style="bottom: 10px"
                      color="white"
                      v-on="on"
                    >
                      <v-icon
                        color="#F8B400"
                      >mdi-help-circle-outline
                      </v-icon>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5 black--text amber darken-1">
                      {{$t('appProject.measurementMm')}}
                    </v-card-title>

                    <v-card-text class="pt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                      in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        class="white--text"
                        text
                        @click="dialog1 = false"
                      >
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col cols="6" align-self="end">
                <v-img
                  src="/sirka.png"
                  max-height="70px"
                  max-width="90px"
                  class="mx-auto"
                ></v-img>
                <v-text-field
                  outlined
                  :label="$t('appProject.width')"
                  color="white"
                  class="pt-2"
                ></v-text-field>
              </v-col>
              <v-col cols="6" align-self="end">
                <v-img
                  src="/vyska1.png"
                  class="mx-auto"
                  max-height="103px"
                  max-width="60px"
                ></v-img>
                <v-text-field
                  outlined
                  :label="$t('appProject.height')"
                  color="white"
                  class="pt-2"
                ></v-text-field>
              </v-col>
            </v-row>

          </v-row>
          <v-divider></v-divider>
          <v-row class="pt-3">
            <v-col cols="7">
              <p style="color: gray;">{{$t('appProject.orientation')}}:</p>
            </v-col>
            <v-col cols="12">
              <v-radio-group v-model="radio1" row class="d-flex justify-space-between">
                <v-col cols="6">
                  <v-col cols="12">
                    <v-img
                      src="/orientaceprvku1.png"
                      class="mx-auto"
                      max-height="70px"
                      max-width="90px"

                    ></v-img>
                  </v-col>
                  <v-row justify="center">
                    <v-radio value="oprvku1" class="mt-6 ml-4" color="#F8B400"></v-radio>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-col cols="12">
                    <v-img
                      src="/orientaceprvku2.png"
                      class="mx-auto"
                      max-height="120px"
                      max-width="65px"
                    ></v-img>
                  </v-col>
                  <v-row justify="center">

                    <v-radio
                      value="oprvku2"
                      color="#F8B400"
                      class="mt-6 ml-5"
                    >

                    </v-radio>
                  </v-row>
                </v-col>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="pt-3">
            <v-col cols="10">
              <p
                style="color: gray"
              >{{ $t('appProject.suky') }}:</p>
            </v-col>
            <v-col cols="2">
              <v-dialog
                v-model="dialog2"
                width="300">
                <template #activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    elevation="0"
                    plain
                    small
                    fab
                    style="bottom: 10px"
                    color="white"
                    v-on="on"

                  >
                    <v-icon
                      color="#F8B400"
                    >mdi-help-circle-outline
                    </v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5 black--text amber darken-1">
                    {{$t('appProject.suky')}}
                  </v-card-title>

                  <v-card-text class="pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="white--text"
                      text
                      @click="dialog2 = false"
                    >
                      OK
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col cols="12">
              <v-radio-group v-model="radio2" row class="d-flex justify-space-between">
                <v-col cols="4">
                  <v-col cols="12">
                    <v-img
                      src="/suk1.png"
                      class="mx-auto pr-1"
                      max-width="60px"
                      max-height="80px"
                    ></v-img>
                  </v-col>
                  <v-row justify="center">
                    <v-radio
                      value="suk1"
                      class="mt-6 ml-5"
                      color="#F8B400"
                    ></v-radio>
                  </v-row>
                </v-col>
                <v-col cols="4">
                  <v-col cols="12">
                    <v-img
                      src="/suk2.png"
                      class="mx-auto pr-0"
                      max-width="60px"
                      max-height="80px"
                    ></v-img>
                  </v-col>
                  <v-row justify="center">
                    <v-radio
                      value="suk2"
                      class="mt-6 ml-5"
                      color="#F8B400"
                    ></v-radio>
                  </v-row>
                </v-col>
                <v-col cols="4">
                  <v-col cols="12">
                    <v-img
                      src="/suk3.png"
                      class="mx-auto pr-0"
                      max-width="60px"
                      max-height="80px"
                    ></v-img>
                  </v-col>
                  <v-row justify="center">
                    <v-radio
                      value="suk3"
                      class="mt-6 ml-5"
                      color="#F8B400"
                    ></v-radio>
                  </v-row>

                </v-col>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="pt-3">
            <v-col cols="10">
              <p style="color: gray">{{$t('appProject.fiberDeflect')}}:</p>
            </v-col>
            <v-col cols="2">
              <v-dialog
                v-model="dialog3"
                width="300"
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    plain
                    fab
                    small
                    style="bottom: 10px"
                    color="white"
                    v-on="on"
                  >
                    <v-icon
                      color="#F8B400"
                    >mdi-help-circle-outline
                    </v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5 black--text amber darken-1">
                    {{$t('appProject.fiberDeflect')}}
                  </v-card-title>

                  <v-card-text class="pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="white--text"
                      text
                      @click="dialog3 = false"
                    >
                      OK
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            </v-col>
            <v-col cols="12">
              <v-radio-group v-model="radio2" row class="d-flex justify-space-between">
                <v-col cols="4">
                  <v-col cols="12">

                    <v-img
                      src="/odklon1.png"
                      class="mx-auto pr-1"
                      max-width="60px"
                      height="60px"
                    ></v-img>
                  </v-col>
                  <v-row justify="center">
                    <v-radio
                      class="mt-6 ml-5"
                      value="odklon1"
                      color="#F8B400"
                    ></v-radio>
                  </v-row>
                </v-col>
                <v-col cols="4">
                  <v-col cols="12">
                    <v-img
                      src="/odklon2.png"
                      class="mx-auto pr-1"
                      max-width="60px"
                      height="60px"
                    ></v-img>
                  </v-col>
                  <v-row justify="center" >
                    <v-radio
                      class="mt-6 ml-5"
                      value="odklon2"
                      color="#F8B400"
                    ></v-radio>
                  </v-row>
                </v-col>
                <v-col cols="4">
                  <v-col cols="12">
                    <v-img
                      src="/odklon3.png"
                      class="mx-auto pr-1"
                      max-width="60px"
                      height="60px"
                    ></v-img>
                  </v-col>
                  <v-row justify="center">
                    <v-radio
                      class="mt-6 ml-5"
                      value="oklon3"
                      color="#F8B400"
                    ></v-radio>
                  </v-row>
                </v-col>
              </v-radio-group>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row class="pt-3">
            <v-col cols="10">
              <p style="color: gray">{{ $t('appProject.typeOfWood') }}:</p>
            </v-col>
            <v-col cols="2">
              <v-dialog
                v-model="dialog4"
                width="300"
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    plain
                    fab
                    small
                    style="bottom: 10px"
                    color="white"
                    v-on="on"
                  >
                    <v-icon
                      color="#F8B400"
                    >mdi-help-circle-outline
                    </v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5 black--text amber darken-1">
                    {{ $t('appProject.typeOfWood') }}
                  </v-card-title>

                  <v-card-text class="pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="white--text"
                      text
                      @click="dialog4 = false"
                    >
                      OK
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
            <v-col cols="12">
              <v-card elevation="0">
                <v-select
                  :label="$t('appProject.typeOfWood')"
                  outlined
                  color="white"
                ></v-select>
                <v-select
                  :label="$t('appProject.originOfWood')"
                  outlined
                  color="white"
                ></v-select>
                <v-textarea
                  outlined
                  :label="$t('appProject.elementDesc')"
                  color="white"
                >
                </v-textarea>
                <v-btn
                  block
                  color="#F8B400"
                  class="black--text mb-16"
                >{{ $t('appProject.saveDesc') }}
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-app>
</template>

<script>
export default {
  name: "Tram2BPage",
  layout: "AllroundLayout",
  data() {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      radio1: false,
      radio2: false
    }
  },
}
</script>

