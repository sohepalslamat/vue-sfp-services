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
      <input id="search" v-model="search" type="text" />
      <label for="user_id">User Id</label>
      <input id="user_id" v-model="user_id" type="number" />

      <div class="pagination">
        <a @click="page > 1 ? page-- : (page = 1)"
          >&laquo;</a
        >
        <a
          v-for="i in 6"
          :key="i"
          @click="page = i"
          :class="{ active: page == i }"
          >{{ i }}</a
        >
        <a @click="page < 6 ? page++ : (page = 6)"
          >&raquo;</a
        >
      </div>
      <div>
        <h5>Queries As Object: {{ JSON.stringify($route.query) }}</h5>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useQueryHandler } from "../lib/sfp-service";
import { useRoute, useRouter } from "vue-router";
// import { SfpService } from "../../dist/vue-sfp-services.es";

const queries = {
  page: 1,
  search: "",
  user_id: 1,
};
const { sfpQueries, pushToUrl } = useQueryHandler(useRouter() , useRoute(), queries );

console.log(sfpQueries)
const page = ref(sfpQueries.value.page)
watch(page, (val) => {
  pushToUrl({ page: val });
});
const search = ref(sfpQueries.value.search)
watch(search, (val) => {
  console.log(val)
  pushToUrl({ search: val });
});
const user_id = ref(sfpQueries.value.user_id)
watch(user_id, (val) => {
  pushToUrl({ user_id: val });
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
