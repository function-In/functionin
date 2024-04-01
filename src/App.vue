<template>
  <router-view></router-view>
</template>

<script setup>
import {onMounted} from "vue";
import {Conf} from "@/Conf";

onMounted(() => {
  // 刷新标题图标
  document.getElementById('favicon').href = Conf.getQQImage();
})
</script>

<style>
/* 定义全局样式 */
* {
  padding: 0;
  margin: 0;
  transition: 0.3s all ease;
  user-select: none;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  //min-width: 500px;
  //min-height: 800px;
}

</style>
