<script setup>
import {Conf} from "@/Conf";
import {onMounted, ref} from "vue";

// HeaderScroll
const isScrollTop = ref(true);

function handleScroll() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  isScrollTop.value = currentScrollTop <= 80;
}

// Header Menu Button Control
const isOpenMenu = ref(false);

// Click HeaderLogoImage
const isClickHeaderImage = ref(false);

// Mounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
})

</script>

<template>
  <header :class="{ headerWhiteColor:!isScrollTop, headerEmptyColor:isScrollTop, headerMenuColor:isOpenMenu }">
    <div class="headerBox">
      <div class="headerLogoBox" title="functionIn">
        <img :alt=" Conf.getQQImage() " :class="{ click:isClickHeaderImage }" :src=" Conf.getQQImage() "
             @click=" isClickHeaderImage = !isClickHeaderImage "/>
        <div class="title">
          <span class="text">functionIn</span>
          <br>Love passionately because of passion
        </div>
      </div>

      <ul class="headerMenu">
        <li class="active">
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">Music</router-link>
        </li>
        <li>
          <router-link to="/">About</router-link>
        </li>
      </ul>

      <div
          :class="{ active:isOpenMenu }"
          class="headerMenuBtn"
          title="Menu"
          @click=" isOpenMenu=!isOpenMenu ">
        <div class="line ALine"></div>
        <div class="line BLine"></div>
        <div class="line CLine"></div>
      </div>
    </div>


    <div :class="{ MenuPanelHide:!isOpenMenu }" class="MenuPanel">
      <ul class="headerMenu">
        <li class="active">
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">Music</router-link>
        </li>
        <li>
          <router-link to="/">About</router-link>
        </li>
        <li @click=" isOpenMenu=!isOpenMenu ">
          <router-link to="/">Close ( Security Options )</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
/* Default Style */
@import "defaultStyle.css";
/* Media Style */
@import "mediaStyle.css";
</style>