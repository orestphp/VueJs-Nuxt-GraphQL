<template>
  <v-app>
    <v-form>
      <v-list subheader two-line>
        <v-list-item
          v-for="folder in folders"
          :key="folder.title"
          link
          style="border-bottom: 1px solid lightgray"
        >
          <v-col>
            <v-row>
              <v-list-item-icon>
                <v-icon color="white" class="pt-2" size="30px"
                  >mdi-folder
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  style="font-size: 14px"
                  v-text="folder.title"
                ></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon to=""
                  >{{ folder.num }}
                  <v-icon color="white" size="30px">mdi-chevron-right </v-icon>
                </v-btn>
              </v-list-item-action>
            </v-row>
          </v-col>
        </v-list-item>
      </v-list>
    </v-form>
  </v-app>
</template>

<script>
export default {
  name: 'FoldersComp',
  components: {},
  data: () => ({
    miniVariant: false,
    folders: [
      {
        title: 'Measurement 01',
      },
      {
        title: 'Měření 02',
      },
    ],
  }),
}
</script>
