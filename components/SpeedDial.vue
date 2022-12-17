<template>
  <v-speed-dial
    v-model="fab"
    :direction="direction"
    :transition="transition"
    bottom
    right
    fixed
  >
    <template #activator>
      <v-btn v-model="fab" color="#F8B400" fab style="float: right">
        <v-icon v-if="fab" color="black"> mdi-close </v-icon>
        <v-icon v-else color="black"> mdi-chevron-up </v-icon>
      </v-btn>
    </template>
    <div v-for="item in items" :key="item.text">
      <v-tooltip left>
        <template #activator="{ on, attrs }">
          <v-btn
            fab
            dark
            small
            v-bind="attrs"
            :to="localePath(item.link)"
            :color="item.color"
            v-on="on"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </template>
        <span>{{ $t(item.text) }}</span>
      </v-tooltip>
    </div>
  </v-speed-dial>
</template>

<script>
export default {
  name: 'SpeedDial',
  components: {},
  data() {
    return {
      direction: 'top',
      fab: false,
      fling: false,
      hover: false,
      tabs: null,
      top: false,
      right: false,
      bottom: false,
      left: false,
      transition: 'slide-y-reverse-transition',
      items: [
        {
          text: 'dial.account',
          link: '/admin/account',
          icon: 'mdi-account',
          color: '#4d4d4d',
        },
        {
          text: 'dial.settings',
          link: '/admin/settings',
          icon: 'mdi-timer-sand-complete',
          color: '#4d4d4d',
        },
        {
          text: 'dial.coms',
          link: '/admin/home',
          icon: 'mdi-lightbulb',
          color: '#F8B400',
        },
      ],

      watch: {
        top(val) {
          this.bottom = !val
        },
        right(val) {
          this.left = !val
        },
        bottom(val) {
          this.top = !val
        },
        left(val) {
          this.right = !val
        },
      },
    }
  },
}
</script>
