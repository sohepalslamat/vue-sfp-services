# vue-sfp-services

[![license](https://img.shields.io/github/license/LouisMazel/vue-phone-number-input.svg?style=flat-square)](https://github.com/sohepalslamat/s-stepper-vue/blob/main/LICENSE) [![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://v2.vuejs.org) [![vue 3](https://img.shields.io/badge/vue-3-42b983.svg?style=flat-square)](https://vuejs.org) [![npm](https://img.shields.io/npm/v/s-stepper-vue.svg?style=flat-square)](https://www.npmjs.com/package/vue-sfp-services)
<!-- [![Codacy grade](https://img.shields.io/codacy/grade/3d15a7c11bfe47c69a2aed93cc67cc29.svg?style=flat-square)](https://www.codacy.com/app/LouisMazel/s-stepper-vue) -->

> This library used for Vue 2 and Vue 3
<!-- ![vue-sfp-services](https://raw.githubusercontent.com/sohepalslamat/s-stepper-vue/main/public/s-stepper-vue.gif) -->
### Live Demo

https://sohepalslamat.github.io/vue-sfp-services/

## Installation

##### Using yarn

```bash 
yarn add vue-sfp-services
```

##### Using npm

```bash
npm i vue-sfp-services
```

## Usage

#### ES6 Modules / CommonJS
Example:


```html
<div class="form">
    <label for="search">Search</label>
    <input id="search" v-model="queries.search" type="text" />
    <label for="user_id">User Id</label>
    <input id="user_id" v-model="queries.user_id" type="number" />
    
    <div class="pagination">
      <a @click="queries.page > 1 ? queries.page-- : queries.page=1">&laquo;</a>
      <a v-for="i in 6" :key="i" @click="queries.page=i" :class="{active: queries.page == i }">{{i}}</a>
      <a @click="queries.page < 6 ? queries.page++ : queries.page=6">&raquo;</a>
    </div>
    <div>
      <h5>Queries As Object: {{$route.query}}</h5>
      <h5>Queries As Url: {{queriesAsUrl}}</h5>
    </div>
  </div>
```
##### With Vue2 option api:
```js
import { SfpService } from "vue-sfp-services";

export default {
  data(){
    return {
      queries:{
        page: 1,
        search: "",
        user_id: 1,
        // .. any data you want 
      }
    }
  },
  created(){
    new SfpService(this.$router, this.$route, this.queries)
  },
}
```
##### With composition api Vue3:
```js
import { reactive } from "vue"
import { useRouter, useRoute } from 'vue-router'
//...
//..
setup() {
    const router = useRouter()
    const route = useRoute()
    const queries = reactive({
      page: 1,
      search: '',
      user_id: 1,
      // .. any data you want 
    })

    new SfpService(router, route, queries)
        
    return {
      queries
    };
  },
```

<!-- ## Contribution -->
----

### Project setup

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run dev
```

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)

--------------------------------

@Vuango Simply Learn