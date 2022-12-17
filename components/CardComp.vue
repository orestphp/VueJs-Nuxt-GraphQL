<template>
  <v-card
    :class="radius"
    height="120px"
    width="130px"
    outlined
    elevation="4"
    rounded
    :color="color"
    class="mx-3"
    link
  >
    <v-row>
      <v-list-item two-line class="py-2">
        <v-list-item-content>
          <v-list-item-title class="pl-3">
            <p
              class="white--text text-uppercase font-weight-thin"
              style="font-size: small"
            >
              {{ $t(label) }}
            </p>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-row>
        <v-list-item two-line class="py-0">
          <v-list-item-content>
            <v-col cols="7">
              <v-list-item-title class="pl-2">
                <p
                  class="white--text"
                  style="
                    font-size: 30px;
                    font-weight: bold;
                    position: absolute;
                    bottom: 45px;
                  "
                >
                  {{ number }}
                </p>
              </v-list-item-title>
            </v-col>
            <v-col cols="5">
              <v-list-item-avatar style="bottom: 15px">
                <v-list-item-avatar class="mr-0 pb-3">
                  <v-icon color="#F8B400" size="30" style=""
                    >{{ icon }}
                  </v-icon>
                </v-list-item-avatar>
              </v-list-item-avatar>
            </v-col>
          </v-list-item-content>
        </v-list-item>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'CardComponent',
  components: {},
  props: {
    label: {
      type: String,
      default: null,
    },
    number: {
      type: Number,
      default: null,
    },
    icon: {
      type: String,
      default: null,
      // mdiAccountCircleOutline
    },
    color: {
      type: String,
      default: 'black',
      // mdiAccountCircleOutline
    },
  },
  data: () => ({
    model: 3,
    rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
  }),

  computed: {
    radius() {
      let rounded = 'rounded'
      const value = this.rounded[this.model]

      if (value !== 'md') {
        rounded += `-${value}`
      }

      return rounded
    },
  },
}
</script>
<style scoped>
.v-card--outlined >>> fieldset {
  border-color: black;
}
</style>
