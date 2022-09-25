<template>
  <div class="form">
    <label for="search">Search</label>
    <input id="search" v-model="search" type="text" />
    <label for="user_id">User Id</label>
    <input id="user_id" v-model="user_id" type="number" />
    
    <div class="pagination">
      <a @click="page > 1 ? page-- : page=1">&laquo;</a>
      <a v-for="i in 6" :key="i" @click="page=i" :class="{active: page == i }">{{i}}</a>
      <a @click="page < 6 ? page++ : page=6">&raquo;</a>
    </div>
    <div>
      <h5>Queries As Object: {{$route.query}}</h5>
      <h5>Queries As Url: {{queriesAsUrl}}</h5>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { SfpService } from "../lib/main";
// import { SfpService } from "../../dist/vue-sfp-services.es";
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
  computed: {
    queriesAsUrl(){
      const paramObj = this.$route.query;
      const qs = Object.keys(paramObj)
        .map((key) => `${key}=${paramObj[key]}`)
        .join("&")
      return qs
    }
    
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
