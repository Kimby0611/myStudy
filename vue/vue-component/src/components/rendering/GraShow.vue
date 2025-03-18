<template>
  <div>
    <p>v-show의 값이 true면 아래 박스가 보입니다.</p>
    <h1 v-show="bShow">hellohellohellohellohellohellohello</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bShow: true
    }
  }
};
</script>

<style scoped>
</style>