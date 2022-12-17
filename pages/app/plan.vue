<template>
  <v-app>
    <layout-comp title="appPlan.planTitle"></layout-comp>
    <v-row class="ma-0">
      <v-col>
        <v-container class="justify-center">
          <v-form class="text-center">
            <p style="font-size: small">{{ $t('appPlan.planSub')}}</p>
            <v-row>
              <v-col cols="12">
                <h2
                  class=" text-center"
                  style="font-weight: 600; font-size:60px"
                >36</h2>
                <v-dialog
                  v-model="planquest"
                  width="300"
                >
                  <template #activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      x-small
                      fab
                      plain
                      color="#F8B400"
                      style="position: relative; bottom: 80px; left: 50px"
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
                      {{$t('appPlan.availEval')}}
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
                        @click="planquest = false"
                      >
                        OK
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
            <p>
              {{$t('appPlan.availEval')}}
            </p>
            <p
              style="color: gray"
            >{{$t('appPlan.buyMore')}}</p>
            <v-row>
              <v-col xl="12" md="12" sm="12" cols="12">
                <v-item-group>
                  <v-item>
                    <plan-card
                      :evals="10 + '\xa0' + $t('appPlan.evals')"
                      price="1500 Kč"
                    >
                    </plan-card>
                  </v-item>
                  <v-item>
                    <plan-card
                      :evals="50 + '\xa0' + $t('appPlan.evals')"
                      price="6000 Kč"
                      :save="$t('appPlan.save') + '\xa0' +  20 + '%'"
                      past-price="7500 Kč"
                    >
                    </plan-card>
                  </v-item>
                  <v-item>
                    <plan-card
                      :evals="200 + '\xa0' + $t('appPlan.evals')"
                      :save="$t('appPlan.save') + '\xa0' +  30 + '%'"
                      price="21000 Kč"
                      past-price="30000 Kč"
                    >
                    </plan-card>
                  </v-item>

                </v-item-group>
              </v-col>
            </v-row>
          </v-form>
          <v-btn
            width="100%"
            color="#F8B400"
            class="black--text my-5"
          >{{$t('appPlan.buttonBuy')}}
          </v-btn>
          <nuxt-link
            to=""
            style="text-decoration: none; color: gray"
          ><p class="text-center subtitle-2 py-3">{{$t('appPlan.proceed')}}</p></nuxt-link>
          <nuxt-link
            to=""
            style="text-decoration:none; color: #F8B400"
          ><p class="text-center mb-6">{{$t('appPlan.historyPay')}}</p>
          </nuxt-link>
        </v-container>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "PlanPage",
  layout: "AllroundLayout",
  data() {
    return {
      planquest: false,
    }
  },

}
</script>
