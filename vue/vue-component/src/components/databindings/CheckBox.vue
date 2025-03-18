<template>
  <div>
    <p>true/false 로 default 저장</p>
    <label><input type="checkbox" v-model="checked">{{ checked }}</label>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true
    };
  }
};
</script>

<style scoped>
</style>