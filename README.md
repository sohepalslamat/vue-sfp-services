# vue-sfp-services

[![license](https://img.shields.io/github/license/LouisMazel/vue-phone-number-input.svg?style=flat-square)](https://github.com/sohepalslamat/s-stepper-vue/blob/main/LICENSE) [![vue 2](https://img.shields.io/badge/vue-2-42b983.svg?style=flat-square)](https://v2.vuejs.org) [![vue 3](https://img.shields.io/badge/vue-3-42b983.svg?style=flat-square)](https://vuejs.org) [![npm](https://img.shields.io/npm/v/s-stepper-vue.svg?style=flat-square)](https://www.npmjs.com/package/vue-sfp-services)
<!-- [![Codacy grade](https://img.shields.io/codacy/grade/3d15a7c11bfe47c69a2aed93cc67cc29.svg?style=flat-square)](https://www.codacy.com/app/LouisMazel/s-stepper-vue) -->

> This library used for Vue 2 and Vue 3
<!-- ![vue-sfp-services](https://raw.githubusercontent.com/sohepalslamat/s-stepper-vue/main/public/s-stepper-vue.gif) -->

## Installation

### Using yarn

```bash 
yarn add vue-sfp-services
```

### Using npm

```bash
npm i vue-sfp-services
```

## Usage

### ES6 Modules / CommonJS


```html
<div>
    <button @click="search=search+1">search++</button>
    <h2>{{ page }}</h2>
    <h2>{{ search }}</h2>
    <h2>{{ user_id }}</h2>
    <button @click="page++">fi</button>
  </div>
```
```js
import { SfpService } from "vue-sfp-services";

const queries = {
      page: 1,
      search: '',
      user_id: 1,
      // .. any data you want 
    }
```

```js
export default {
  data(){
    return {
      ...new SfpService(this.$router, this.$route, queries).queries
    }
  }
}
```
```js
// With composition api 
setup() {
    const queries = {
      page: 1,
      search: '',
      user_id: 1,
      // .. any data you want 
    }

    const sfp = new SfpService(router, route, queries)
        
    return {
      ...sfp.queries
    };
  },
```

## Contribution

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