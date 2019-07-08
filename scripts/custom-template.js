const templateObj = {
  vueFileTemp: (pageName) => {
    return `<style lang='scss'>
</style>
<template>
  <div id="app">
    <!-- vue template content -->
  </div>
</template>

<script src=''>
</script>
`
  },
  entryFileTemp: (pageName) => {
    return `import { Vue } from "js/base";
import App from "./index.vue";
import "./index.scss";

// entry file content

new Vue({
  render: h => h(App)
}).$mount("#app");
`
  },
  styleFileTemp: (pageName) => {
    return `@import "~scss/variables.scss";
@import "~scss/mixins.scss";
`
  },
  htmlFileTemp: (pageName) => {
    return `<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Title</title>
    
    <% require('html-loader!@/utils/dns-prefetch') %>
</head>

<body>
    <div id="app">
    <!-- built files will be auto injected -->
    </div>
</body>

</html>
`
  }
};

module.exports = templateObj;