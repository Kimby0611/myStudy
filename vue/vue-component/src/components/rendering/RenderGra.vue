<template>
  <div>
    <p>v-if/v-else-if/v-else와 type으로 사용</p>
    <h1 v-if="type == 'A'">A</h1>
    <h1 v-else-if=" type == 'B'">B</h1>
    <h1 v-else>C</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'A'
    };
  }
};
</script>

<style scoped>
</style>