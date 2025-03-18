<template>
  <div>
    <div>{{ htmlstring }}</div>
    <div v-html="htmlstring"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      htmlstring: '<p style="color:red;">This is a red string</p>'
    };
  }
};
</script>

<style scoped>
</style>