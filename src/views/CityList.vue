<template>
  <div>
    <li v-for="city in cities" :key="city.name">
      <router-link :to="`/city/${city.name}`">{{ city.name }}</router-link>
    </li>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CityList",
  data() {
    return {
      cities: []
    };
  },
  mounted() {
    const countryCode = this.$route.params.countryCode;
    axios.get("/api/citylist/" + countryCode).then(res => {
      this.cities = res.data;
    });
  }
};
</script>
