<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app, *, body, html {
  font-family: PingFangSC-Regular,Microsoft Yahei;
}
body {
  background-color: #000;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
</style>
