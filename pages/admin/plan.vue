<template>
  <v-app>
    <v-container class="ml-3 pr-10">
      <v-row>
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card
            class="rounded-xl"
            outlined
            color="black"
            height="100%"
            rounded
          >
            <v-container>
              <v-row>
                <v-col cols="12" xl="12" md="12">
                  <v-card-title
                    class="pt-2 text-uppercase pl-5"
                    style="font-size: 15px"
                  >
                    {{ $t('plan.plan') }}
                  </v-card-title>
                </v-col>
                <!--                <v-col cols="2" xl="2" md="2" sm="2">-->
                <!--                  <v-btn-->
                <!--                    plain-->
                <!--                    fab-->
                <!--                    small-->
                <!--                    class="pt-0"-->
                <!--                  >-->
                <!--                    <v-icon>-->
                <!--                      mdi-chevron-right-->
                <!--                    </v-icon>-->
                <!--                  </v-btn>-->
                <!--                </v-col>-->
              </v-row>
              <v-row no-gutters class="mt-xl-16 mt-md-9">
                <v-col cols="10" xl="10" md="10" sm="10">
                  <v-row
                    v-for="item in packages"
                    :key="item.title"
                    no-gutters
                    align="center"
                  >
                    <v-col cols="10" xl="10" md="10" sm="10">
                      <v-card-title
                        class="text-xl-h6 text-md-body-1 text-sm-body-2 font-weight-regular"
                        style="color: gray"
                        >{{ item.title }}
                      </v-card-title>
                      <v-card-subtitle
                        class="white--text text-xl-h5 text-md-body-1 text-sm-body-2"
                        style="font-weight: 600"
                      >
                        {{ item.price }} <s>{{ item.save }}</s>
                      </v-card-subtitle>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="2" xl="2" md="2">
                  <v-row no-gutters>
                    <v-icon
                      color="#F8B400"
                      class="ml-xl-7 mb-md-2 ml-sm-5"
                      style="position: absolute; bottom: 5%"
                    >
                      mdi-chart-areaspline
                    </v-icon>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card
            class="rounded-xl"
            outlined
            color="black"
            rounded
            height="50%"
          >
            <v-row no-gutters>
              <v-col cols="12" xl="12" md="12" sm="12">
                <v-card-title
                  class="text-uppercase pl-5"
                  style="font-size: 15px"
                >
                  {{ $t('plan.questionarre') }}
                </v-card-title>
              </v-col>
              <!--                <v-col cols="2">-->
              <!--                  <v-btn-->
              <!--                    plain-->
              <!--                    fab-->
              <!--                    style="bottom: 10%;"-->
              <!--                    small-->
              <!--                    class="text-start pr-sm-6"-->

              <!--                  >-->
              <!--                    <v-icon>-->
              <!--                      mdi-chevron-right-->
              <!--                    </v-icon>-->
              <!--                  </v-btn>-->
              <!--                </v-col>-->
            </v-row>
            <v-row class="mb-2">
              <v-col cols="12">
                <v-row class="pl-4 mt-xl-12">
                  <v-col cols="3" xl="3" md="3">
                    <nuxt-link to="" class="white--text text-md-body-2"
                      >Otazník CZE</nuxt-link
                    >
                  </v-col>
                  <v-col cols="4" xl="4" md="4">
                    <nuxt-link to="" class="white--text text-md-body-2"
                      >Questionmark ENG</nuxt-link
                    >
                  </v-col>
                  <v-col cols="4" xl="4" md="4">
                    <nuxt-link to="" class="white--text text-md-body-2"
                      >Fragezeichen GER</nuxt-link
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card>
          <v-spacer class="mt-3"></v-spacer>
          <v-card
            class="rounded-xl"
            outlined
            color="black"
            rounded
            height="47%"
          >
            <v-row no-gutters class="my-xl-3 my-md-2 my-sm-3">
              <v-col cols="12">
                <v-card-title
                  class="text-uppercase pa-0 mt-xl-0 ml-4 mt-md-3"
                  style="font-size: 15px"
                >
                  {{ $t('plan.invoiced') }}
                </v-card-title>
              </v-col>
              <!--              <v-col cols="2">-->
              <!--                <v-btn-->
              <!--                  style="bottom: 10%"-->
              <!--                  plain-->
              <!--                  fab-->
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
                    class="mt-xl-11 mt-md-9 text-xl-h2 text-md-h4 text-sm-h5"
                    style="font-weight: 600"
                  >
                    1 265 200
                  </p>
                </v-card-title>
              </v-col>
              <v-col cols="2" xl="2" md="2" sm="2">
                <v-icon
                  color="#F8B400"
                  class="mt-xl-16 pt-xl-6 mt-md-14 ml-xl-2 mt-sm-4 ml-sm-2"
                >
                  mdi-chart-areaspline
                </v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card
            class="rounded-xl"
            outlined
            color="black"
            rounded
            min-width="300px"
            height="50%"
          >
            <v-row no-gutters>
              <v-col cols="12">
                <v-card-title
                  class="text-uppercase pl-5"
                  style="font-size: 15px"
                >
                  {{ $t('plan.hisPay') }}
                </v-card-title>
              </v-col>
              <!--              <v-col cols="2">-->
              <!--                <v-btn-->
              <!--                  plain-->
              <!--                  fab-->
              <!--                  small-->
              <!--                  height="100%"-->
              <!--                >-->
              <!--                  <v-icon>-->
              <!--                    mdi-chevron-right-->
              <!--                  </v-icon>-->
              <!--                </v-btn>-->
              <!--              </v-col>-->
            </v-row>
            <v-row no-gutters>
              <v-col cols="12" xl="12" md="12" sm="12">
                <v-card-title>
                  <p
                    class="mt-xl-15 mt-md-9 text-xl-h4 text-md-h5"
                    style="font-weight: 600"
                  >
                    26 672
                  </p>
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
          <v-spacer class="mt-3"></v-spacer>
          <v-card
            class="rounded-xl"
            outlined
            color="black"
            rounded
            min-width="300px"
            height="47%"
          >
            <v-row no-gutters class="pb-xl-1 my-md-1">
              <v-col cols="12">
                <v-card-title
                  class="text-uppercase pl-5 pa-0 ma-0 mt-xl-2"
                  style="font-size: 15px"
                >
                  {{ $t('plan.methodPay') }}
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
            <v-row no-gutters class="mt-xl-12">
              <v-col cols="12" xl="12" md="12" sm="12">
                <v-card-title>
                  <p
                    class="mt-md-3 text-xl-h3 text-md-h4"
                    style="font-weight: 600"
                  >
                    2
                  </p>
                </v-card-title>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <!--          <v-card-->
          <!--            class="rounded-xl"-->
          <!--            outlined-->
          <!--            color="gray"-->
          <!--            rounded-->
          <!--            min-width="300px"-->
          <!--            min-height="150px"-->
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
      </v-row>
      <v-row class="pt-xl-5 pt-md-3">
        <v-col cols="12" sm="12" xl="4" md="4">
          <p
            class="text-start text-uppercase text-xl-h6 mt-xl-3"
            style="font-weight: 600"
          >
            {{ $t('plan.hisPay') }}
          </p>
        </v-col>
        <v-col cols="12" sm="12" xl="4" md="4">
          <v-card outlined color="gray">
            <v-row>
              <v-col cols="12" sm="12" xl="12" md="12">
                <v-text-field
                  v-model="search"
                  class="px-4 my-0 text-uppercase"
                  :label="$t('plan.search')"
                  append-icon="mdi-magnify"
                  color="gray"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" xl="4" md="4">
          <v-row class="float-end my-xl-2" align="center">
            <v-pagination
              v-model="page"
              :length="pageCount"
              color="#F8B400"
            ></v-pagination>
            <v-switch color="#F8B400"> </v-switch>
            <p class="text-xl-subtitle-2 my-0">
              {{ $t('plan.withPay') }}
            </p>
            <v-btn color="white" small fab plain>
              <v-icon> mdi-dots-vertical </v-icon>
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-data-table
            style="background-color: transparent"
            :headers="headers"
            :items="keyinfo"
            :search="search"
            :page.sync="page"
            hide-default-footer
            :items-per-page="itemsPerPage"
            @page-count="pageCount = $event"
          ></v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AdminPlan',
  layout: 'adminlayout',
  miniVariant: false,
  data() {
    return {
      // Data table content allowed per page
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      packages: [
        // Card content packages.
        { title: this.$i18n.t('plan.measurePack'), price: '10ks / 1500Kč' },
        {
          title: this.$i18n.t('plan.measurePack2'),
          save: '5000Kč',
          price: '50ks / 6000Kč',
        },
        {
          title: this.$i18n.t('plan.measurePack3'),
          save: '25000Kč',
          price: '10ks / 1500Kč',
        },
      ],
      // Data table search bar
      search: '',
      headers: [
        // Data table headers
        {
          text: this.$i18n.t('plan.createdAt').toUpperCase(),
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: this.$i18n.t('plan.role').toUpperCase(), value: 'role' },
        { text: this.$i18n.t('plan.name').toUpperCase(), value: 'jmeno' },
        { text: this.$i18n.t('plan.company').toUpperCase(), value: 'firma' },
        { text: this.$i18n.t('plan.plan').toUpperCase(), value: 'plan' },
        { text: this.$i18n.t('plan.project').toUpperCase(), value: 'projekt' },
        { text: this.$i18n.t('plan.invoiced').toUpperCase(), value: 'paidfor' },
        {
          text: this.$i18n.t('plan.hardware').toUpperCase(),
          value: 'hardware',
        },
      ],
      // Data table contents
      keyinfo: [
        {
          name: '10.6.2023',
          role: 'admin',
          jmeno: 'Lorem Ipsum',
          firma: 'Lorem Ipsum',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ano',
        },
        {
          name: '10.6.2023',
          role: 'user',
          jmeno: 'Jaroslav Babač',
          firma: 'Mercury Technologies',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ano',
        },
        {
          name: '10.6.2023',
          role: 'user',
          jmeno: 'Lorem Ipsum',
          firma: 'Boar Coms',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ne',
        },
        {
          name: '10.6.2023',
          role: 'admin',
          jmeno: 'Jiří Chovaneček',
          firma: 'Cavernetworks',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ne',
        },
        {
          name: '10.6.2023',
          role: 'admin',
          jmeno: 'Josef Pavlišta',
          firma: 'Luckyworks',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ano',
        },
        {
          name: '10.6.2023',
          role: 'user',
          jmeno: 'Ludvík Beskyd',
          firma: 'Brisco',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ano',
        },
        {
          name: '10.6.2023',
          role: 'admin',
          jmeno: 'Petr Holub',
          firma: 'Voyage Navigations',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ano',
        },
        {
          name: '10.6.2023',
          role: 'user',
          jmeno: 'Jan Vandas',
          firma: 'Lorem Ipsum',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ne',
        },
        {
          name: '10.6.2023',
          role: 'user',
          jmeno: 'Jaroslav Viliš',
          firma: 'Rush Enterprises',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ne',
        },
        {
          name: '10.6.2023',
          role: 'user',
          jmeno: 'Martin Mazánek',
          firma: 'Forestpaw',
          plan: '36(231)',
          projekt: '21(31)',
          paidfor: '26 900',
          hardware: 'ano',
        },
      ],
    }
  },
  // Local storage title change
  mounted() {
    this.$store.commit('CHANGE_NAME', { name: this.$i18n.t('nav.plan') })
  },

  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset || e.target.scrollTop || 0
      this.fab = top > 20
    },
    toTop() {
      this.$vuetify.goTo(0)
    },
  },
}
</script>
