<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" xl="8" md="8">
          <v-card min-height="75vh" class="rounded-xl" color="black">
            <v-card-title
              class="text-xl-subtitle-1 font-weight-bold text-uppercase white--text black"
            >
              {{ $t('normy.label') }}
            </v-card-title>
            <v-row no-gutters>
              <v-col cols="12">
                <v-card-subtitle class="pa-0 ma-0 ml-4 text-uppercase">
                  {{ $t('normy.type') }}
                </v-card-subtitle>
                <v-card-title
                  class="pa-0 ma-0 ml-4 text-xl-h4 font-weight-bold"
                  >{{ $t('normy.value') }}</v-card-title
                >
                <v-card-subtitle class="pt-4">{{
                  $t('normy.name')
                }}</v-card-subtitle>
                <v-divider></v-divider>
                <v-tabs v-model="tab" background-color="black" class="my-xl-5">
                  <v-tabs-slider color="white"></v-tabs-slider>
                  <v-tab
                    v-for="item in items"
                    :key="item.title"
                    style="color: white"
                  >
                    {{ item.title }}
                  </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                  <v-tab-item>
                    <v-card color="black">
                      <v-row no-gutters>
                        <v-card-subtitle
                          style="color: gray"
                          class="pa-0 ma-0 ml-4"
                          >{{ $t('normy.valueMili') }}</v-card-subtitle
                        >
                      </v-row>
                      <v-card-text style="max-width: 300px">
                        <v-text-field
                          class="ma-0 pa-0"
                          color="white"
                          suffix="mm"
                        ></v-text-field>
                      </v-card-text>
                      <v-col cols="4">
                        <v-card-actions class="pl-16 ml-15 ma-0 pa-0">
                          <v-btn color="white" text class="pt-0">
                            {{ $t('normy.cancel') }}
                          </v-btn>
                          <v-btn color="#F8B400" text>
                            {{ $t('normy.save') }}
                          </v-btn>
                        </v-card-actions>
                      </v-col>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card color="black">
                      <v-row no-gutters>
                        <v-card-subtitle
                          style="color: gray"
                          class="pa-0 ma-0 ml-4"
                          >Hodnota
                        </v-card-subtitle>
                      </v-row>
                      <v-card-text style="max-width: 300px">
                        <v-text-field
                          class="ma-0 pa-0"
                          color="white"
                          suffix="mm"
                        ></v-text-field>
                      </v-card-text>
                      <v-col cols="4">
                        <v-card-actions class="pl-16 ml-15 ma-0 pa-0">
                          <v-btn color="white" text class="pt-0">
                            {{ $t('normy.cancel') }}
                          </v-btn>
                          <v-btn color="#F8B400" text>
                            {{ $t('normy.save') }}
                          </v-btn>
                        </v-card-actions>
                      </v-col>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </v-col>
            </v-row>
            <v-spacer class="mt-md-big mt-xl-big mt-sm-10 mt-8">
              <v-divider></v-divider>
            </v-spacer>
          </v-card>
        </v-col>
        <v-col cols="12" xl="4" md="4" sm="12">
          <v-card height="100%" class="rounded-xl" color="black">
            <v-card-title
              class="text-xl-subtitle-1 font-weight-bold text-uppercase white--text black"
            >
              {{ $t('normy.timeline') }}
            </v-card-title>
            <v-card-text class="py-0">
              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="item in timeline"
                  :key="item.time"
                  color="#F8B400"
                  small
                >
                  <v-row>
                    <v-col cols="4">
                      <strong>{{ item.nameTask }}</strong>
                      <div class="text-caption">
                        {{ item.taskDesc }}
                      </div>
                    </v-col>
                    <v-col>
                      <strong>{{ item.time }}</strong>
                    </v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AdminNormy',
  layout: 'adminlayout',
  data() {
    return {
      tab: null,
      items: [
        // Input navigation
        {
          title: this.$i18n.t('normy.detail'),
        },
        {
          title: this.$i18n.t('normy.info'),
        },
      ],
      // Timeline component content
      timeline: [
        {
          time: '2.11 2021',
          nameTask: 'LIpsum',
          taskDesc: 'Lorem Ipsum',
        },
        {
          time: '3.11 2021',
          nameTask: 'Lorpsum',
          taskDesc: 'Lorems Ipsum',
        },
        {
          time: '4.11 2021',
          nameTask: 'LoIpsum',
          taskDesc: 'Loremd Ipsum',
        },
        {
          time: '5.11 2021',
          nameTask: 'Lorpsum',
          taskDesc: 'Lorem4 Ipsum',
        },
        {
          time: '6.11 2021',
          nameTask: 'Lum',
          taskDesc: 'Loreaasdm Ipsum',
        },
      ],
    }
  },
  // Local storage title change
  mounted() {
    this.$store.commit('CHANGE_NAME', { name: this.$i18n.t('nav.standarts') })
  },
}
</script>

<style>
.space {
  height: 20%;
}
</style>
