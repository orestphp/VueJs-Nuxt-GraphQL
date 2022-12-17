<template>
  <v-app>
    <v-container class="ml-3">
      <v-row>
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card
            class="rounded-xl flex-grow-1"
            outlined
            color="black"
            rounded
            height="100%"
          >
            <v-row>
              <v-col cols="12" xl="12" md="12" sm="12">
                <v-card-title
                  class="text-uppercase pl-5"
                  style="font-size: 15px"
                >
                  {{ $t('home.database') }}
                </v-card-title>
              </v-col>
              <!--              <v-col cols="2" xl="2" md="2" sm="2">-->
              <!--                <v-btn-->
              <!--                  plain-->
              <!--                  fab-->
              <!--                  small-->
              <!--                  class="mt-3"-->
              <!--                >-->
              <!--                  <v-icon>-->
              <!--                    mdi-chevron-right-->
              <!--                  </v-icon>-->
              <!--                </v-btn>-->
              <!--              </v-col>-->
            </v-row>
            <v-row>
              <v-col cols="7" xl="7" md="6" sm="7">
                <v-card-title>
                  <p
                    class="pa-0 pl-1 pl-sm-1 pl-xl-1 mb-xl-6 text-xl-h2 text-md-h3"
                    style="font-weight: 600; line-height: unset"
                  >
                    3 675
                  </p>
                </v-card-title>
              </v-col>
              <v-col cols="5" xl="5" md="6" sm="5">
                <v-card-subtitle>
                  <p
                    class="pt-xl-4 pl-4 ml-xl-5 pt-md-4 ml-md-3 ml-sm-5 font-weight-thin"
                  >
                    <v-icon class="pa-0" large color="#F8B400"
                      >mdi-circle-small
                    </v-icon>
                    {{ $t('home.users') }}
                  </p>
                </v-card-subtitle>
              </v-col>
              <v-col cols="12" xl="12" md="12" sm="12">
                <v-card-text class="mr-md-5">
                  <apex-chart
                    width="100%"
                    height="230"
                    type="line"
                    :options="options"
                    :series="series"
                  ></apex-chart>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12" class="d-flex flex-column">
          <v-card class="rounded-xl" outlined color="black" height="50%">
            <v-row>
              <v-col cols="12">
                <v-card-title
                  class="text-uppercase pl-5"
                  style="font-size: 15px"
                >
                  {{ $t('home.invoices') }}
                </v-card-title>
              </v-col>
              <!--              <v-col cols="2">-->
              <!--                <v-btn-->
              <!--                  plain-->
              <!--                  fab-->
              <!--                  class="mt-3"-->
              <!--                  small-->
              <!--                >-->
              <!--                  <v-icon>-->
              <!--                    mdi-chevron-right-->
              <!--                  </v-icon>-->
              <!--                </v-btn>-->
              <!--              </v-col>-->
            </v-row>
            <v-row no-gutters>
              <v-col cols="10" xl="10" md="10" sm="10">
                <v-card-title>
                  <p
                    class="pl-0 pa-0 ma-0 mt-md-14 text-xl-h2 text-md-h3"
                    style="font-weight: 600"
                  >
                    1 265 200
                  </p>
                </v-card-title>
              </v-col>
              <v-col
                cols="2"
                xl="2"
                md="2"
                sm="2"
                class="mt-xl-16 pt-xl-7 mt-md-16 pt-md-7"
              >
                <v-icon color="#F8B400" class="ml-xl-6">
                  mdi-chart-areaspline
                </v-icon>
              </v-col>
            </v-row>
          </v-card>
          <v-spacer class="mt-9"></v-spacer>
          <v-card
            class="rounded-xl flex-grow-1"
            outlined
            color="black"
            rounded
            height="50%"
          >
            <v-row>
              <v-col cols="12">
                <v-card-title
                  class="text-uppercase pl-5 pb-3"
                  style="font-size: 15px"
                >
                  {{ $t('home.hardware') }}
                </v-card-title>
              </v-col>
              <!--              <v-col cols="2">-->
              <!--                <v-btn-->
              <!--                  plain-->
              <!--                  fab-->
              <!--                  class="mt-3"-->
              <!--                  small-->
              <!--                >-->
              <!--                  <v-icon>-->
              <!--                    mdi-chevron-right-->
              <!--                  </v-icon>-->
              <!--                </v-btn>-->
              <!--              </v-col>-->
            </v-row>
            <v-row no-gutters>
              <v-col cols="10">
                <v-card-title>
                  <p
                    class="pl-0 pa-0 ma-0 mt-xl-12 mt-md-14 text-xl-h2 text-md-h3"
                    style="font-weight: 600"
                  >
                    12
                  </p>
                </v-card-title>
              </v-col>
              <v-col cols="2" class="mt-xl-16 pt-xl-7 mt-md-16 pt-md-7">
                <v-icon color="#F8B400" class="ml-xl-6">
                  mdi-chart-areaspline
                </v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12" class="d-flex flex-column">
          <v-card class="rounded-xl flex-grow-1" outlined color="black" rounded>
            <v-container>
              <v-row>
                <v-col cols="10">
                  <v-card-title
                    class="text-uppercase pl-5"
                    style="font-size: 15px"
                  >
                    {{ $t('home.plan') }}
                  </v-card-title>
                </v-col>
                <v-col cols="2">
                  <dialog-on-chevron> </dialog-on-chevron>
                </v-col>
              </v-row>
              <v-row>
                <v-col xl="12" md="12" sm="12" cols="12">
                  <v-item-group class="pt-xl-6">
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
                        save="Save 20%"
                        past-price="7500 Kč"
                      >
                      </plan-card>
                    </v-item>
                    <v-item>
                      <plan-card
                        :evals="200 + '\xa0' + $t('appPlan.evals')"
                        save="Save 30%"
                        price="21000 Kč"
                        past-price="30000 Kč"
                      >
                      </plan-card>
                    </v-item>
                  </v-item-group>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card
            class="rounded-xl"
            color="transparent"
            style="border: 1px solid #ccc !important"
            rounded
            height="100%"
          >
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card-title
                    class="text-uppercase pl-5"
                    style="font-size: 15px"
                  >
                    {{ $t('home.userDown') }}
                  </v-card-title>
                </v-col>
                <!--                <v-col cols="2">-->
                <!--                  <v-btn-->
                <!--                    plain-->
                <!--                    fab-->
                <!--                    small-->
                <!--                    class="mt-3"-->
                <!--                  >-->
                <!--                    <v-icon>-->
                <!--                      mdi-chevron-right-->
                <!--                    </v-icon>-->
                <!--                  </v-btn>-->
                <!--                </v-col>-->
              </v-row>
              <v-row>
                <v-col xl="12" md="12" sm="12" xs="12">
                  <v-col cols="12">
                    <apex-chart
                      class="mt-xl-7 mt-md-7"
                      width="106%"
                      height="300px"
                      type="donut"
                      :options="options1"
                      :series="series1"
                    ></apex-chart>
                  </v-col>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card
            class="rounded-xl"
            color="transparent"
            style="border: 1px solid #ccc !important"
            rounded
            min-width="300px"
            height="100%"
          >
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-card-title
                    class="text-uppercase pl-5"
                    style="font-size: 15px"
                  >
                    {{ $t('home.userAmount') }}
                  </v-card-title>
                </v-col>
                <!--                <v-col cols="2">-->
                <!--                  <v-btn-->
                <!--                    plain-->
                <!--                    fab-->
                <!--                    small-->
                <!--                    class="mt-3"-->
                <!--                  >-->
                <!--                    <v-icon>-->
                <!--                      mdi-chevron-right-->
                <!--                    </v-icon>-->
                <!--                  </v-btn>-->
                <!--                </v-col>-->
              </v-row>
              <v-row>
                <v-col xl="12" md="12" sm="12" xs="12">
                  <v-col cols="12" class="mt-md-7">
                    <apex-chart
                      width="100%"
                      height="300px"
                      class="text-xl-h6"
                      type="donut"
                      :options="options2"
                      :series="series2"
                    ></apex-chart>
                  </v-col>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <!--        <v-col cols="12" xl="4" md="4" sm="12">-->
        <!--          <v-card-->
        <!--            class="rounded-xl"-->
        <!--            outlined-->
        <!--            color="gray"-->
        <!--            rounded-->
        <!--            min-height="300px"-->
        <!--            height="100%"-->
        <!--            link-->
        <!--          >-->
        <!--            <p class="text-center" style="position: absolute; top: 45%; left: 45%">-->
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
        <!--        </v-col>-->
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card color="black" rounded class="rounded-xl">
            <v-container>
              <v-textarea
                label="Lorem ipsum sit dolor delicious amete"
                solo
                background-color="black"
                auto-grow
              ></v-textarea>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="white" text class="pt-0">
                  {{ $t('home.buttonList') }}
                </v-btn>
                <v-btn color="#F8B400" text @click="snackbar = true">
                  {{ $t('home.buttonCreate') }}
                </v-btn>

                <v-snackbar
                  v-model="snackbar"
                  :multi-line="multiLine"
                  color="black"
                  width="100%"
                  rounded="pill"
                >
                  {{ text }}

                  <template #action="{ attrs }">
                    <v-btn color="#F8B400" text>
                      {{ $t('home.buttonReturn') }}
                    </v-btn>
                    <v-btn
                      color="white"
                      text
                      x-small
                      fab
                      v-bind="attrs"
                      @click="snackbar = false"
                    >
                      <v-icon> mdi-close </v-icon>
                    </v-btn>
                  </template>
                </v-snackbar>
              </v-card-actions>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AdminHome',
  layout: 'adminlayout',
  miniVariant: false,
  data() {
    return {
      multiLine: false,
      snackbar: false,
      text: `Prvek byl přidán.`,
      options: {
        stroke: {
          curve: 'straight',
          width: 4,
          colors: '#F8B400',
          lineCap: 'butt',
        },

        markers: {
          size: 3,
          colors: '#F8B400',
        },
        tooltip: {
          enabled: false,
        },
        chart: {
          id: 'vuechart-example',
          selection: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          foreColor: '#ffffff',
          zoom: {
            enabled: false,
          },
        },
        xaxis: {
          labels: {
            rotate: -45,
          },
          categories: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
        },
        colors: ['#F8B400'],
        width: '2px',
      },
      series: [
        {
          data: [
            1000, 1400, 2000, 900, 1000, 1100, 1200, 4000, 1300, 1900, 2000,
            2100,
          ],
        },
      ],
      options1: {
        stroke: {
          colors: ['#000'],
        },
        tooltip: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          labels: {
            colors: '#ffffff',
          },
          onItemHover: {
            highlightDataSeries: false,
          },
          position: 'right',
          offsetY: 65,
        },
        colors: ['#F8B400', '#ffffff'],
        labels: ['Mobile', 'Desktop'],
        states: {
          hover: {
            filter: {
              type: 'none',
            },
            active: {
              filter: {
                type: 'lighten',
                value: '0',
              },
            },
          },
        },

        plotOptions: {
          pie: {
            startAngle: 80,
            endAngle: 440,
            expandOnClick: false,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10,
            },
            donut: {
              size: '85%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '100%',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  color: '#ffffff',
                  offsetY: -10,
                  formatter(val) {
                    return val
                  },
                },
                value: {
                  show: true,
                  fontSize: '30px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#ffffff',
                  offsetY: 16,
                  formatter(val) {
                    return val
                  },
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: this.$t('home.charts.downloads'),
                  fontSize: '100%',
                  fontFamily: 'Italic, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#808080',
                  formatter(w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  },
                },
              },
            },
          },
        },
      },
      options2: {
        stroke: {
          colors: ['#000'],
        },
        tooltip: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          labels: {
            colors: '#ffffff',
          },
          onItemHover: {
            highlightDataSeries: false,
          },
          position: 'right',
          offsetY: 65,
        },
        colors: ['#F8B400', '#ffffff', '#787878'],
        labels: ['CZE', 'ENG', 'GER'],
        states: {
          hover: {
            filter: {
              type: 'none',
            },
            active: {
              filter: {
                type: 'lighten',
                value: '0',
              },
            },
          },
        },

        plotOptions: {
          pie: {
            startAngle: 180,
            endAngle: 540,
            expandOnClick: false,
            offsetX: 0,
            offsetY: 0,
            customScale: 1,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10,
            },
            donut: {
              size: '85%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '100%',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 400,
                  color: '#ffffff',
                  offsetY: -10,
                  formatter(val) {
                    return val
                  },
                },
                value: {
                  show: true,
                  fontSize: '30px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#ffffff',
                  offsetY: 16,
                  formatter(val) {
                    return val
                  },
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: this.$t('home.charts.downloads'),
                  fontFamily: 'Italic, Arial, sans-serif',
                  fontWeight: 600,
                  color: '#808080',
                  formatter(w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  },
                },
              },
            },
          },
        },
      },
      series1: [100000, 27000],
      series2: [50000, 25000, 25000],
    }
  },
  // Local storage title change
  mounted() {
    this.$store.commit('CHANGE_NAME', { name: this.$i18n.t('nav.home') })
  },
}
</script>
<style>
.apexcharts-text.apexcharts-datalabel-label {
  font-style: italic;
}

.v-application p {
  margin-bottom: unset;
}
</style>
