<!--
  HeaderView Component
  Create By functionIn
  Time 2024-03-29 07:19:35
 -->

<script setup>

</script>

<template>
  <!-- headerBox -->
  <header class="header">
    <!-- logoTitle area -->
    <text title="functionIn">
      <router-link to="/">functionIn</router-link>
    </text>
    <!-- menu -->
    <ul>
      <!-- menuTab area -->
      <li class="active" title="HOME">
        <router-link to="/">HOME</router-link>
      </li>
      <li title="ABOUT">
        <router-link to="/">ABOUT</router-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
/* headerBox */
.header {
  width: 100%;
  height: 20vh;
  min-width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
}

/* link */
.header a {
  text-decoration: none;
  color: mediumseagreen;
  font-weight: bold;
}

/* headerBox logoTitle */
.header text {
  margin-left: 6vw;
  border-bottom: 0.7vh double mediumseagreen;
  cursor: pointer;
}

/* headerBox logoTitle link */
.header text a {
  font-size: 2em;
}

/* headerBox logoTitle Hover */
.header text:hover {
  border-bottom: 0.7vh double green;
}

/* headerBox logoTitle link Hover */
.header text:hover a {
  color: green;
}

/* menuBox and menuTab */
.header ul, .header ul li {
  list-style: none;
}

/* menuBox */
.header ul {
  margin-right: 6vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

/* menuTab */
.header ul li {
  margin-left: 2vw;
}

/* menuTab link */
.header ul li a {
  font-size: 1.5em;
}


/* menuTab Hover link */
.header ul li:hover a {
  color: green;
}

/* menuTab Active */
/*
.header ul li.active {
  border-bottom: 0.4vh solid green;
}
*/

/* menuTab Active link */
.header ul li.active a {
  color: green;
}

</style>