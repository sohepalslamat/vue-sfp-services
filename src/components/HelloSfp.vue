<template>
  <div>
    <header style="margin: 5px auto; width: 100px">
      <a
        style="font-size: 20px; padding: 1px; margin: 2px"
        href="https://github.com/sohepalslamat/vue-sfp-services"
      >
        <i class="fa fa-github"></i>
      </a>
      <a
        style="font-size: 20px; padding: 1px; margin: 2px"
        href="https://www.npmjs.com/package/vue-sfp-services"
      >
      <img
          width="30"
          src="https://user-images.githubusercontent.com/16657091/55263234-8b903300-522d-11e9-9926-44e4b3c17e0a.png"
          alt="npm logo"
      />
      </a>
    </header>
    <div class="form">
      <label for="search">Search</label>
      <input id="search" v-model="queries.search" type="text" />
      <label for="user_id">User Id</label>
      <input id="user_id" v-model="queries.user_id" type="number" />

      <div class="pagination">
        <a @click="queries.page > 1 ? queries.page-- : (queries.page = 1)">&laquo;</a>
        <a v-for="i in 6" :key="i" @click="queries.page = i" :class="{ active: queries.page == i }">{{
          i
        }}</a>
        <a @click="queries.page < 6 ? queries.page++ : (queries.page = 6)">&raquo;</a>
      </div>
      <div>
        <h5>Queries As Object: {{ JSON.stringify($route.query) }}</h5>
        <h5>Queries As Url: {{ queriesAsUrl }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { SfpService } from "../lib/main";
// import { SfpService } from "../../dist/vue-sfp-services.es";

export default defineComponent({
  data() {
    return {
      queries:{
        page: 1,
        search: "",
        user_id: 1,
      }
    };
  },
  created(){
    new SfpService(this.$router, this.$route, this.queries)
  },
  computed: {
    queriesAsUrl() {
      const paramObj = this.$route.query;
      const qs = Object.keys(paramObj)
        .map((key) => `${key}=${paramObj[key]}`)
        .join("&");
      return qs;
    },
  },
});
</script>
<style>
.form {
  display: inline-grid;
}
.form > * {
  margin-bottom: 10px;
}
.pagination {
  display: inline-block;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
}

.pagination a.active {
  background-color: #4caf50;
  color: white;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
</style>
