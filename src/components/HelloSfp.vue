<template>
  <div>
    <button @click="search = search + 1">x++</button>
    <h2>{{ page }}</h2>
    <h2>{{ search }}</h2>
    <h2>{{ page }}</h2>
    <button @click="page++">fi</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { SfpService } from "../lib/main";
// import { SfpService } from "../../dist/my-lib.es";
const queries = {
  page: 1,
  search: "",
  user_id: 1,
};
export default defineComponent({
  data() {
    return {
      ...new SfpService(this.$router, this.$route, queries).queries,
    };
  },
  updated() {
    const paramObj = this.$route.query;
    const qs = Object.keys(paramObj)
      .map((key) => `${key}=${paramObj[key]}`)
      .join("&");
    console.log(qs);
  },
  setup() {
    // const queries = {
    //   page: 1,
    //   search: '',
    //   user_id: 1
    // }
    // const sfp = new SfpService(router, route, queries)
    // return {
    //   ...sfp.queries
    // };
  },
});
</script>
