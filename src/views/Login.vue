<template>
  <div>
    <label>
      UserName
      <input type="text" v-model="userName" />
    </label>
    <label>
      Password
      <input type="password" v-model="password" />
    </label>
    <button @click="loginPost">Login</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      userName: "",
      password: ""
    };
  },
  methods: {
    loginPost() {
      if (this.userName != "" && this.password != "") {
        axios.post("/api/login", {
          username: this.userName,
          password: this.password
        });
      }
    }
  }
};
</script>
