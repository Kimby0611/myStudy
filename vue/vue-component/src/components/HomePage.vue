<template>
  <div>
    <h1>HomePage</h1>
    <button @click="$router.push('/databinding')">data binding</button>
    <button @click="$router.push('/rendering')">rendering</button>
    <button @click="$router.push('/comwat')">computed and watch</button>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
