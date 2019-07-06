<template>
  <div id="app">
    <nav-menu></nav-menu>
    <section class="content">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import NavMenu from './components/nav-menu';
export default {
  name: 'g2-demos',
  components: {
    NavMenu,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  font-size: 14px;
}
.content {
  margin-left: 220px;
}
</style>
