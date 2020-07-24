<template>
  <div>
    <li v-for="country in countries" :key="country.name">
      <router-link :to="`/citylist/${country.code}`">{{
        country.name
      }}</router-link>
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CountryList",
  data() {
    return {
      countries: []
    };
  },
  mounted() {
    axios.get("/api/countrylist").then(res => {
      this.countries = res.data;
    });
  }
};
</script>
