<template>
  <div>
    <div v-if="cityInfo">
      <p>Name: {{ cityInfo.name }}</p>
      <p>CountryCode: {{ cityInfo.countryCode }}</p>
      <p>District: {{ cityInfo.district }}</p>
      <p>Population: {{ cityInfo.population }}</p>
    </div>
    <div v-else>街が見つかりませんでした</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "City",
  data() {
    return {
      cityInfo: null
    };
  },
  mounted() {
    const cityName = this.$route.params.cityName;
    axios.get("/api/cities/" + cityName).then(res => {
      this.cityInfo = res.data;
    });
  }
};
</script>
