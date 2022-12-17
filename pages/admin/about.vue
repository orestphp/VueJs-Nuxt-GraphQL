<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col
          v-for="item in cards"
          :key="item.cardtitle"
          cols="12"
          xl="4"
          md="4"
          sm="12">
          <thin-card-comp
            :title="item.cardtitle"
            :bignum="item.bignum"
            :transparent='item.transparent'
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
<!--            min-width="300px"-->
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
        <v-col
          cols="12"
          xl="4"
          md="4"
          sm="12"
        >
          <v-card
            height="100%"
            class="rounded-xl"
            color="black"
          >
            <v-card-title class="text-h6 black--text amber darken-1">
              {{$t('about.projectInfo')}}
            </v-card-title>
            <v-card-text>
              <v-col>
                <v-row>
                  <v-row>
                    <v-expansion-panels
                      class="mt-5"
                    >
                      <v-expansion-panel
                        v-for="item in expansion"
                        :key="item.expatitle"
                        class="black mx-2"
                        style="border-bottom: 1px solid white!important;"

                      >
                        <v-expansion-panel-header>
                          {{item.expatitle}}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                          {{item.expacontent}}
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-row>
                        <v-col cols="12">
                          <v-select
                              v-model="prvniSelect"
                              class="mx-6 ma-0 mt-3"
                              color="white"
                              :label="$t('about.version')"
                              :items="items"

                            >
                            </v-select>
                          <v-select
                            v-model="druhySelect"
                            class="mx-6 ma-0"
                            color="white"
                            :label="$t('about.copyright')"
                            :items="secondItems"
                          >
                          </v-select>
                        </v-col>
                      </v-row>
                    </v-expansion-panels>
                  </v-row>
                </v-row>
              </v-col>
            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="white"
                text
                class="pt-0"
                @click="smazatVec"


              >
                {{$t('about.cancel')}}
              </v-btn>
              <v-btn
                color="#F8B400"
                text
              >
                {{$t('about.save')}}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'AdminAbout',
  components: {},
  layout: 'adminlayout',
  data() {
    return {
      cards: [
        {
          // Card content
          cardtitle: 'about.contacts',
          bignum: 'Lorem ipsum s.r.o.',
          styling: 'text-xl-h4 text-md-h4 text-sm-h4 ml-sm-3  pb-md-0 text-h3 ml-3 mb-xl-2',
          transparent: false,
          icon: false,
          iconRight: true
        },
        {
          cardtitle: 'about.projectInfo',
          bignum: '1.0.0 (50)',
          styling: 'text-xl-h4 text-md-h4 text-sm-h4 ml-sm-3 text-h3 ml-3 mb-xl-2',
          transparent: true,
          icon: false,
          iconRight: true
        },
        {
          cardtitle: 'about.conditions',
          bignum: '2',
          styling: 'text-xl-h4 text-md-h4 text-sm-h4 ml-sm-3 text-h3 ml-3 mb-xl-2',
          icon: false,
          iconRight: true
        }
      ],
      // Accordion component
      expansion: [
        {
          expatitle: this.$i18n.t('about.expatitle'),
          expacontent: this.$i18n.t('about.expacontent'),
        },
      ],
      // select components
      items:[
        '1.0.0(50)',
      ],
      secondItems:[
        'Copyright 2022 Lorem ipsum s.r.o'
      ],
      prvniSelect:null,
      druhySelect:null,

    }
  },
  // Local storage title change
  mounted() {
    this.$store.commit('CHANGE_NAME', {name: this.$i18n.t('nav.aboutUs')})
  },
  // Clear selects
  methods: {
    smazatVec() { this.prvniSelect = this.druhySelect = null }
  }
}

</script>
