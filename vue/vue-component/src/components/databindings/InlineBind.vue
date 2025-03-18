<template>
  <div v-bind:style="[baseStyle, addStyle]">
    인라인 바인딩 스타일
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseStyle: 'background-color: yellow; width: 60%; height:400px; margin: 0 auto;',
      addStyle: 'color:red; font-weight:bold; display:flex; align-items: center; justify-content:center;'
    };
  }
};
</script>

<style scoped>
</style>