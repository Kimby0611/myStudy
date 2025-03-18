<template>
  <div>
    <h1>this is computed and watch</h1>
    <nav>
      <router-link to="/computed" replace>computed</router-link>|
      <router-link to="/watch" replace>watch</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
</style>