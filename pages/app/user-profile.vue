<template>
  <v-app>
    <layout-comp title="userProfile.changeCredTitle"></layout-comp>
    <v-container fluid class="fill-height">
      <v-row class="text-center ma-0" justify="center">
        <v-col
          cols="12"
          md="3">
          <v-form
            ref="form"
            v-model="valid">
            <p class="text-center">
              <v-avatar
                width="100px"
                height="100px"
                color="#F8B400">
                <v-icon
                  x-large>
                  mdi-account
                </v-icon>
              </v-avatar>
            </p>
            <v-text-field
              :rules="nameRules"
              :label="$t('userProfile.name')"
              persistent-hint
              outlined
              color="white"
              required
            />
            <v-text-field
              :rules="surnameRules"
              :label="$t('userProfile.surname')"
              persistent-hint
              outlined
              color="white"
              required
            />
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              outlined
              color="white"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="[rules.required, rules.min]"
              :label="$t('userProfile.password')"
              type="password"
              outlined
              required
              color="white"
            />
            <v-select
              v-model="countrychoose"
              :label="$t('userProfile.country')"
              :rules="countrychooseRules"
              outlined
              required
              color="white"
              :items="['Česká republika', 'Německo', 'Velká Británie' ]"

            ></v-select>
            <h3 class="my-3">{{$t('userProfile.billInfo')}}</h3>

            <v-text-field
              v-model="companyname"
              :rules="companynameRules"
              :label="$t('userProfile.compName')"
              persistent-hint
              outlined
              required
              color="white"
            />
            <v-text-field
              v-model="VAT"
              :rules="VATRules"
              :label="$t('userProfile.VAT')"
              persistent-hint
              outlined
              required
              color="white"
            />
            <v-text-field
              v-model="address"
              :rules="addressRules"
              :label="$t('userProfile.address')"
              persistent-hint
              outlined
              required
              color="white"
            />
            <v-btn
              block
              color="#F8B400"
              class="black--text"
              type="submit"
              :disabled="!valid"
            >
              {{$t('userProfile.saveChange')}}
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name:"UserProfile",
  layout:"AllroundLayout",
  data() {
    return {
      clipped: false,
      miniVariant:false,
      valid: true,
      // validation
      email: "",
      emailRules: [
        v => !!v || this.$t('account.emailRules'),
        v => /^\S+@\S+\.\S+$/.test(v) || this.$t('account.emailRules2')
      ],
      nameRules: [
        v => !!v || this.$t('account.nameRule'),
      ],
      surnameRules:[
        v => !!v || this.$t('account.surnameRules')
      ],
      countrychoose: "",
      countrychooseRules: [
        v => !!v || this.$t('userProfile.countryRules')
      ],
      companyname: "",
      companynameRules: [
        v => !!v || this.$t('userProfile.companyRules')
      ],
      VAT: "",
      VATRules: [
        v => !!v || this.$t('userProfile.vatRules')
      ],
      address:"",
      addressRules:[
        v=> !!v || this.$t('userProfile.addressRules')
      ],
      password:'',
      rules: {
        required: value => !!value || this.$t('account.passwordRules'),
        min: v => v.length >= 8 || this.$t('account.passwordRules2'),
      },
    }
  }
}
</script>

<style scoped>
  body{
    overflow-y: auto;
  }
</style>
