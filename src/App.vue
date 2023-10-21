<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
* {
  box-sizing: border-box;
}

#app,
body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-x: auto;
  overflow-y: hidden;
  min-width: 1366px;
  min-height: 700px!important;
  --themeColor: #eb4450;
  --themeSize: 14px;
}

a {
  text-decoration: none;
  color: #606266;
}
</style>
