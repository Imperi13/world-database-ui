<template>
  <div>
    <button @click="sendGet">get</button>
    <button @click="sendPost">post</button>
    <button @click="sendPut">put</button>
    <button @click="sendDelete">delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Axios",
  methods: {
    sendGet() {
      axios.get("https://fe96b44477f6a1c59fc5b38433195c4e.m.pipedream.net");
    },
    sendPost() {
      axios.post("https://fe96b44477f6a1c59fc5b38433195c4e.m.pipedream.net", {
        traQID: "to-hutohu",
        grade: 16
      });
    },
    sendPut() {
      axios.put("https://fe96b44477f6a1c59fc5b38433195c4e.m.pipedream.net", {
        testData: { string: "string", number: 1 }
      });
    },
    sendDelete() {
      axios.delete("https://fe96b44477f6a1c59fc5b38433195c4e.m.pipedream.net", {
        data: { po: 1 }
      });
    }
  }
};
</script>
