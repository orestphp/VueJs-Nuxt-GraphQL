<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header class="py-6">
        <v-col cols="1" sm="1" xs="2">
          <v-icon
            style="position: absolute; left: 14px; top: 20px"
            size="30px"
            color="#F8B400"
            >mdi-square-edit-outline
          </v-icon>
        </v-col>
        <p class="pl-6 my-1">{{ $t(name) }}</p>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <p class="justify-center">{{ content }}</p>
        <p class="justify-center">
          <v-list>
            <v-list-item>
              {{ desc }}
            </v-list-item>
            <v-list-item>
              {{ gps }}
            </v-list-item>
            <v-list-item>
              {{ dateTime }}
            </v-list-item>
            <v-list-item>
              {{ params }}
            </v-list-item>
            <v-list-item>
              {{ koty }}
            </v-list-item>
            <v-list-item>
              {{ normy }}
            </v-list-item>
          </v-list>
        </p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'AccordComp',
  components: {},
  props: {
    name: {
      default: null,
      type: String,
    },
    content: {
      default: null,
      type: String,
    },
    desc: {
      default: null,
      type: String,
    },
    gps: {
      default: null,
      type: String,
    },
    dateTime: {
      default: null,
      type: String,
    },
    params: {
      default: null,
      type: String,
    },
    koty: {
      default: null,
      type: String,
    },
    normy: {
      default: null,
      type: String,
    },
  },
}
</script>
