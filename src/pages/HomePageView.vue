<script setup>

import {Conf} from "@/Conf";
import HeaderView from "@/components/headerView/headerView.vue";
import FooterView from "@/components/footerView/footerView.vue";
</script>

<template>
  <div class="HomePageView">
    <!-- headerView -->
    <header-view></header-view>

    <div class="Content">
      <!-- Icon -->
      <div class="LogoImage rainbow-border">
        <img title="functionIn" :src="Conf.getQQImage()" :alt="Conf.getQQImage()"/>
      </div>
      <!-- TipsText -->
      <text class="title" title="Welcome to website">
        <br>Welcome to website<br>I'm functionIn<br>A developer who loves technology<br>
      </text>
      <!-- 'Go blog' link-button -->
      <router-link to="/blog">GO BLOG</router-link>
    </div>
    <footer-view></footer-view>
  </div>
</template>

<style scoped>

/* HomePageView Content*/
.HomePageView .Content {
//height: 100vh;
  background-image: url("@/assets/HomeBackground.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  min-height: 800px;
}

/* rainbow border */
@keyframes rainbow {
  0% {
    box-shadow: 0 0 6px red;
    border-left: 6px solid red;
    border-top: 6px solid green;
    border-right: 6px solid blue;
    border-bottom: 6px solid yellow;
  }
  14.3% {
    box-shadow: 0 0 6px orange;
    border-left: 6px solid green;
    border-top: 6px solid blue;
    border-right: 6px solid violet;
    border-bottom: 6px solid orange;
  }
  28.6% {
    box-shadow: 0 0 6px green;
    border-left: 6px solid blue;
    border-top: 6px solid yellow;
    border-right: 6px solid orange;
    border-bottom: 6px solid indigo;
  }
  42.9% {
    box-shadow: 0 0 6px blue;
    border-left: 6px solid green;
    border-top: 6px solid orange;
    border-right: 6px solid indigo;
    border-bottom: 6px solid violet;
  }
  57.2% {
    box-shadow: 0 0 6px indigo;
    border-left: 6px solid orange;
    border-top: 6px solid indigo;
    border-right: 6px solid violet;
    border-bottom: 6px solid red;
  }
  71.5% {
    box-shadow: 0 0 6px violet;
    border-left: 6px solid indigo;
    border-top: 6px solid violet;
    border-right: 6px solid red;
    border-bottom: 6px solid green;
  }
  85.8% {
    box-shadow: 0 0 6px red;
    border-left: 6px solid violet;
    border-top: 6px solid red;
    border-right: 6px solid green;
    border-bottom: 6px solid blue;
  }
  100% {
    box-shadow: 0 0 6px orange;
    border-left: 6px solid red;
    border-top: 6px solid green;
    border-right: 6px solid blue;
    border-bottom: 6px solid yellow;
  }
}

/* rotate border ( test ) */
@keyframes rotateBorder {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);

  }
}

/* HomePageView Content Image */
.HomePageView .Content img {
  width: 10vw;
  height: 10vw;
  border-radius: 100%;
  min-width: 150px;
  min-height: 150px;
  box-shadow: 0 0 6px grey;
  /*animation: rotateBorder 4s linear infinite;*/
  animation: rainbow 10s linear infinite;
}

/* HomePageView Content Title */
.HomePageView .Content .title {
  font-size: 3.5em;
  line-height: 80px;
  margin-top: 10px;

}

/* HomePageView Content link */
.HomePageView .Content a {
  margin-top: 3vh;
  text-decoration: none;
  padding: 18px 25px;
  background-color: rgba(60, 179, 113, 0.8);
  color: white;
  border-radius: 5px;
}

/* HomePageView Content link hover */
.HomePageView .Content a:hover {
  background-color: rgba(60, 179, 113, 1);
  box-shadow: 0 0 6px grey;
}
</style>