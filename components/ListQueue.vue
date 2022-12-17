<template>
  <v-list>
    <v-list-item-group color="white">
      <v-list-item v-for="item in items" :key="item.text">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      // apollo get all mereni for the current user logged in
      { text: 'Měření', icon: 'mdi-clock', subtitle: 'Měření' },
    ],
  }),
}
</script>
