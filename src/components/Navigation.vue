<template>
  <fragment>
    <template v-for="menu in this.menuData">
      <el-submenu :key="menu.index" :index="menu.index" v-if="menu.children">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span slot="title">{{ menu.name }}</span>
        </template>
        <MenuTree :menuData="menu.children"></MenuTree>
      </el-submenu>
      <el-menu-item :key="menu.index" :index="menu.index" v-else>
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
    </template>
  </fragment>
</template>

<script>
export default {
  props: ["menuData"],
  name: "MenuTree",
};
</script>
