<template>
  <aside class="nav-menu">
    <el-menu
      :default-active="menuActive"
      class="el-menu-vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu :index="index + ''" v-for="(menu, index) in menuData" :key="menu.title">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ menu.title }}</span>
        </template>
        <el-menu-item :index="subMenu.path" v-for="subMenu in menu.children" :key="subMenu.title">{{
          subMenu.title
        }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </aside>
</template>

<script>
import menuData from './menu';
export default {
  name: 'nav-menu',
  data() {
    return {
      menuActive: undefined,
      menuData,
    };
  },
  mounted() {
    this.menuActive = this.$route.path;
    console.log(this.menuActive);
  },
  methods: {},
  watch: {
    $route(to) {
      this.menuActive = to.path;
    },
  },
};
</script>

<style>
.nav-menu {
  width: 220px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background: rgb(84, 92, 100);
}
.nav-menu .el-submenu__title {
  text-align: left;
  background: rgb(67, 74, 80) !important;
}
.nav-menu .el-menu {
  text-align: left;
}
.nav-menu .el-submenu .el-menu-item {
  padding-left: 50px !important;
}
.nav-menu .el-menu {
  border-right: 0;
}
</style>
