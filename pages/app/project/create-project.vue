<template>
  <v-app fluid>
    <layout-component title="appProject.createProject"></layout-component>
    <v-container>
      <v-form
        ref="createProject"
        v-model="valid"
        enctype="multipart/form-data"
        @submit.prevent="createProject"
      >
        <v-text-field
          v-model="name"
          :rules="nameRules"
          :label="$t('appProject.name')"
          persistent-hint
          outlined
          color="white"
          required
        ></v-text-field>
        <v-text-field
          v-model="desc"
          :rules="descRules"
          :label="$t('appProject.desc')"
          persistent-hint
          outlined
          color="white"
          required
        ></v-text-field>
        <v-text-field
          v-model="long"
          :rules="longRules"
          :label="$t('appProject.longitude')"
          outlined
          color="white"
          required
        ></v-text-field>
        <v-text-field
          v-model="lat"
          :rules="latRules"
          :label="$t('appProject.latitude')"
          outlined
          color="white"
          required
        ></v-text-field>
        <div>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                :rules="datumRules"
                :label="$t('appProject.date')"
                color="white"
                readonly
                outlined
                v-bind="attrs"
                required
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              locale="cs-cz"
              color="white"
              :active-picker.sync="activePicker"
              :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </div>
        <v-file-input
          id="projectImage"
          ref="projectImage"
          v-model="imgProject"
          :rules="imgRules"
          accept="image/png, image/jpeg, image/bmp"
          prepend-icon="mdi-camera"
          :label="$t('appProject.logo')"
          color="#F8B400"
          outlined
        >
        </v-file-input>
      <v-btn
        color="#F8B400"
        class="black--text"
        block
        type="submit"
        :disabled="!valid"
      >{{$t('appProject.create')}}</v-btn>
      </v-form>
    </v-container>
  </v-app>
</template>

<script>
  import LayoutComponent from "@/components/LayoutComp";
  export default {
    name:"CreateProject",
    components: {LayoutComponent},
    layout:"AllroundLayout",
    data() {
      return {
        valid: true,
        name: "",
        desc: "",
        nameRules: [
          v => !!v || this.$t('appProject.nameRules'),
        ],
        descRules: [
          v => !!v || this.$t('appProject.descRules'),
        ],
        long: "",
        longRules: [
          v => !!v || this.$t('appProject.logRules')
        ],
        lat: "",
        latRules: [
          v => !!v || this.$t('appProject.latRules')
        ],
        date: null,
        datumRules: [
          v => !!v || this.$t('appProject.dateRules')
        ],
        imgRules: [
          value => !value || value.size < 6000000 || this.$t('appProject.logoRules'),
          v => !!v || this.$t('appProject.logoRules2')
        ],
        imgProject: null,
        activePicker: null,
        menu: false,
      }
    },
    watch: {
      menu(val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
      // save date
      save(date) {
        this.$refs.menu.save(date)
      },
      // create project (async)
      async createProject() {
        const formData = new FormData();

        const query = `
        mutation($projectInput: ProjectInput!)  {
            createProject(input: $projectInput)
        }`;
        const projectInput = {
          name: this.name,
          description: this.desc,
          lat: parseFloat(this.lat),
          long: parseFloat(this.long),
          file: null
        };
        const operations = JSON.stringify({ query, variables: { projectInput }});
        formData.append("operations", operations);

        const map = {"0": ["variables.projectInput.file"]};
        formData.append("map", JSON.stringify(map));

        const file = document.getElementById("projectImage").files[0];
        formData.append("0", file);

        try {
          const response = await this.$axios({
            method: "POST",
            data: formData,
            url: process.env.apiUrl,
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: 'Bearer ' + localStorage.getItem('token')
            },
          });

          const data = response.data.data;

          if(typeof data.createProject !== 'undefined') {
            await this.$router.push('/app/projects');
          } else if(typeof data.errors !== 'undefined') {
            for (const i in data.errors) {
              this.errorDetails += data.errors[i].message + "\n";
            }
            console.log('errors: ', this.errorDetails);
          }

        } catch (error) {
          console.log(error);
        }
      },
    },
  }
</script>

<style scoped>
  html{
    overflow-y: hidden
  }
</style>
