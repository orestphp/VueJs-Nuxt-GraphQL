<template>
  <v-app>
    <layout-component title="Tutorial"></layout-component>
    <v-list
      subheader
      two-line
    >
      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        link
        style="border-bottom: 1px solid gray"
      >
        <v-col>
          <v-row>
            <v-list-item-avatar>
              <v-icon
                color="#F8B400"
              >mdi-file
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title style="font-weight: bold" v-text="folder.title"></v-list-item-title>
              <v-list-item-subtitle v-text="folder.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-progress-circular
                :size="20"
                color="#F8B400"
                indeterminate
              ></v-progress-circular>
            </v-list-item-action>
          </v-row>
        </v-col>
      </v-list-item>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        href="/blank.pdf"
        target="_blank"
        style="border-bottom: 1px solid gray"

      >
        <v-col>
          <v-row>
            <v-list-item-avatar>
              <v-icon
                color="#F8B400"
              >mdi-file
              </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title style="font-weight: bold" v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn
                icon
                download
                href="file.pdf"

              >
                <v-icon
                  color="#F8B400"
                >mdi-download
                </v-icon>
              </v-btn>
            </v-list-item-action>
          </v-row>
        </v-col>
      </v-list-item>
    </v-list>
  </v-app>
</template>

<script>
import LayoutComponent from "@/components/LayoutComp";

export default {
  name: "TutorialsPage",
  components: {LayoutComponent},
  layout: "AllroundLayout",
  data: () => ({
    // folders content
    folders: [
      {
        subtitle: 'Language: CZE',
        title: 'Lorem ipsum dolor site',
      },
      {
        subtitle: 'Language: CZE',
        title: 'Lorem ipsum dolor sit ame',
      },
    ],
    items: [
      {
        title: 'Loremimpusim',
        subtitle: 'Language: CZE'
      }
    ],
  })
}
</script>

<style scoped>
  v-list-item:last-child{
    border-bottom: none;
  }
</style>
