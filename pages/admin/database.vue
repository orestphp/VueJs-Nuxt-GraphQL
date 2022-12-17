<template>
  <v-app>
    <v-container class="ml-3 pr-10">
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
            :styling="item.styling"
            :icon="item.icon"
            :icon-right="item.iconRight"
          ></thin-card-comp>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <!--          <v-card-->
          <!--            class="rounded-xl"-->
          <!--            outlined-->
          <!--            color="gray"-->
          <!--            rounded-->
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
            {{ $t('database.totalReg') }}
          </p>
        </v-col>
        <v-col cols="12" sm="12" xl="4" md="4">
          <v-card outlined color="gray">
            <v-row>
              <v-col cols="12" sm="12" xl="12" md="12">
                <v-text-field
                  v-model="search"
                  class="px-4 my-0 text-uppercase"
                  :label="$t('database.search')"
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
              {{ $t('database.withPay') }}
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
            hide-default-footer
            :page.sync="page"
            :items-per-page="itemsPerPage"
            @page-count="pageCount = $event"
          >
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AdminDatabase',
  layout: 'adminlayout',

  data() {
    return {
      // Data table content count per page.
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      cards: [
        {
          // Card content
          cardtitle: 'database.totalReg',
          bignum: '3 675',
          styling: 'text-xl-h3 text-md-h4 ml-md-1 mt-md-5 text-sm-h3 ml-4',
          icon: true,
          iconRight: true,
        },
        {
          cardtitle: 'database.minOnePay',
          bignum: '368',
          styling: 'text-xl-h3 text-md-h4 mt-md-5 ml-md-1 text-sm-h3 ml-4',
          icon: true,
          iconRight: true,
        },
        {
          cardtitle: 'database.measurements',
          bignum: ' 26 759 / 21 674',
          styling:
            'text-xl-h4 text-md-h5 mt-md-5 ml-md-1 pb-md-1 text-sm-h4 ml-4',
          icon: true,
          iconRight: true,
        },
        {
          cardtitle: 'database.projects',
          bignum: '426 / 2 652',
          styling:
            'text-xl-h4 text-md-h5 mt-md-5 pb-md-1 ml-md-1 text-sm-h4 ml-4',
          icon: true,
          iconRight: true,
        },
        {
          cardtitle: 'database.invoiced',
          bignum: '1 265 000',
          styling:
            'text-xl-h4 text-md-h5 mt-md-5 pb-md-1 text-sm-h4 ml-md-1 ml-4',
          icon: true,
          iconRight: true,
        },
        {
          cardtitle: 'database.hardware',
          bignum: '12',
          styling:
            'text-xl-h4 text-md-h5 mt-md-5 pb-md-1 text-sm-h4 ml-4 ml-md-1',
          icon: true,
          iconRight: true,
        },
      ],
      search: '',

      headers: [
        {
          // Data table headers
          text: this.$i18n.t('database.createdAt').toUpperCase(),
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { text: this.$i18n.t('database.role').toUpperCase(), value: 'role' },
        { text: this.$i18n.t('database.name').toUpperCase(), value: 'jmeno' },
        {
          text: this.$i18n.t('database.company').toUpperCase(),
          value: 'firma',
        },
        { text: this.$i18n.t('database.name').toUpperCase(), value: 'plan' },
        {
          text: this.$i18n.t('database.project').toUpperCase(),
          value: 'projekt',
        },
        {
          text: this.$i18n.t('database.invoiced').toUpperCase(),
          value: 'paidfor',
        },
        {
          text: this.$i18n.t('database.hardware').toUpperCase(),
          value: 'hardware',
        },
      ],
      // Data table content
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
    this.$store.commit('CHANGE_NAME', { name: this.$i18n.t('nav.database') })
  },
}
</script>
