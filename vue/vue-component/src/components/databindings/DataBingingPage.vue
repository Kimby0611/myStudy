<template>
    <h1>this is data binding page</h1>
    <nav>
      <router-link to="/basic" replace>기본</router-link>|
      <router-link to="/bindstr" replace>속성값 추가</router-link>|
      <router-link to="/formbind" replace>Form binding</router-link>|
      <router-link to="/number" replace>number</router-link>|
      <router-link to="/textarea" replace>Textarea</router-link>|
      <router-link to="/select" replace>select</router-link>|
      <router-link to="/checkbox" replace>checkbox</router-link>|
      <router-link to="/checkboxarray" replace>checkbox array</router-link>|
      <router-link to="/radio" replace>Radio button</router-link>|
      <router-link to="/img" replace>image src</router-link>|
      <router-link to="/buttondisa" replace>btn disabled</router-link>|
      <router-link to="/class" replace>class binding</router-link>|
      <router-link to="/inline" replace>inline binding</router-link>|
      <router-link to="/bindmodel" replace>v-bind/model</router-link>
    </nav>
    <router-view/>
</template>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>