<template>
  <v-app>
    <layout-comp title="appProject.projectTitle"></layout-comp>

    <v-list subheader two-line name="projects">

      <div v-if="!ownProjects">
      <v-list-item
        v-for="folder in folders"
        :key="folder.title"
        link
        :to="localePath('/app/project/show-project')"
        style="border-bottom: 1px solid gray"
      >
        <v-col>
          <v-row>
            <v-list-item-icon>
              <v-icon color="#F8B400" class="pt-2" size="30px">
                mdi-folder
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="folder.title"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon :to="localePath('/app/project/show-project')">
                {{ folder.num }}
                <v-icon color="#F8B400" size="30px">mdi-chevron-right</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-row>
        </v-col>
      </v-list-item>
      </div>

      <div v-else>
        <v-list-item
          v-for="folder in ownProjects"
          :key="folder.name"
          link
          :to="localePath('/app/project/show-project')"
          style="border-bottom: 1px solid gray"
        >
          <v-col>
            <v-row>
              <v-list-item-icon>
                <v-icon color="#F8B400" class="pt-2" size="30px">
                  mdi-folder
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="folder.name"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon :to="localePath('/app/project/show-project')">
                  {{ subProjectCount }}
                  <v-icon color="#F8B400" size="30px">mdi-chevron-right</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-row>
          </v-col>
        </v-list-item>
      </div>

    </v-list>
    <v-row justify="center" class="ma-0">
      <v-btn
        outlined
        fab
        :to="localePath('/app/project/create-project')"
        fixed
        color="#F8B400"
        class="mb-16"
        bottom
      >
        <v-icon size="50px" color="#F8B400">mdi-plus</v-icon>
      </v-btn>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'ProjectsPage',
  layout: 'AllroundLayout',
  data: () => ({
    subProjectCount: 1,
    miniVariant: false,
    projectObjects: [],
    // Project folders
    folders: [
      {
        title: 'Project 1',
        num: 33,
        where: '/app/project/showProject',
      },
      {
        title: 'Project2',
        num: 23,
      },
      {
        title: 'Project-3',
        num: 10,
      },
    ],
  }),
  computed: {
    ownProjects() {
      return this.projectObjects;
    }
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      const query = `
      {
        ownProjects {
          name
          description
        }
      }`;

      try {
        const response = await this.$axios({
          method: 'POST',
          data: { query },
          url: process.env.apiUrl,
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
          }
        });

        const data = response.data.data;
        if(typeof data === 'undefined' || typeof data.ownProjects !== 'undefined') {
          this.projectObjects = data.ownProjects;
        } else {
          // 200 error
          // console.log(data.ownProjects);
        }

      } catch (error) {
        // console.log(error);
      }
    },
  }
}
</script>

<style scoped>
html {
  overflow-y: hidden;
}
</style>
