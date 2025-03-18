<template>
  <div>
    <img v-bind:src="imgSrc" alt width="100" height="100" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: "https://kr.vuejs.org/images/logo.png"
    };
  }
};
</script>

<style scoped>
</style>