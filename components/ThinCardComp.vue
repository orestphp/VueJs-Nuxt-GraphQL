<template>
  <v-card
    class="rounded-xl"
    outlined
    :color="color"
    rounded
    :style="border"
    height="100%"
  >
    <v-row>
      <v-col cols="12" xl="12" md="12" sm="12">
        <v-card-title
          style="font-weight: 600"
          class="text-uppercase pl-5 text-body-2 text-sm-body-2 text-md-caption text-xl-body-2"
        >
          {{ $t(title) }}
        </v-card-title>
      </v-col>
      <!--      <v-col cols="2" xl="3" md="3" sm="2">-->
      <!--        <v-btn-->
      <!--          v-if="iconUp"-->
      <!--          plain-->
      <!--          fab-->
      <!--          class="mt-2 ml-xl-13 pr-md-1 ml-sm-2"-->
      <!--          small-->
      <!--        >-->
      <!--          <v-icon>-->
      <!--            {{iconUp}}-->
      <!--          </v-icon>-->
      <!--        </v-btn>-->
      <!--      </v-col>-->
    </v-row>
    <v-row no-gutters class="ma-0 pa-0">
      <v-col cols="12" xl="12" md="12" sm="12" class="pa-0">
        <v-card-title>
          <p
            :class="styling"
            class="ml-md-0 pr-sm-5 pr-xl-0"
            style="font-weight: 600"
          >
            {{ bignum }}
          </p>
        </v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ThinCardComp',
  components: {},
  props: {
    title: {
      type: String,
      default: null,
    },
    bignum: {
      type: String,
      default: null,
    },
    styling: {
      type: String,
      default: null,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: false,
    },
    iconRight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    color() {
      return this.transparent === true ? 'transparent' : 'black'
    },
    border() {
      return this.transparent === true ? 'border: 1px solid #ccc!important' : ''
    },
    cardIcon() {
      return this.icon === true ? 'mdi-chart-areaspline' : ''
    },
    iconUp() {
      return this.iconRight === true ? 'mdi-chevron-right' : ''
    },
  },
}
</script>
