import Vue from 'vue'
import VueApexCharts from 'vue-apexcharts'

const vueConfig = require('vue-config')
const config = {
  API_URL: ''
}
Vue.use(vueConfig, config)
Vue.component('ApexChart', VueApexCharts)
