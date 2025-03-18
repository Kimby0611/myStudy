<template>
  <h1>this is rendering page</h1>
  <nav>
    <router-link to="/listrender" replace>list rendering</router-link>|
    <router-link to="/rendergra" replace>v-if~else</router-link>|
    <router-link to="/grashow" replace>v-show</router-link>|
    <router-link to="/click" replace>clickEV</router-link>|
    <router-link to="/change" replace>change event</router-link>|
  </nav>
  <router-view/>
</template>

<style scoped>
</style>