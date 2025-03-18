<template>
  <div>
    <p>v-bind:class="{'active': isActive, 'text-red':hasError} true/false로 원하는 값만 줄 수 있음</p>
    <div class="container" v-bind:class="{'active': isActive, 'text-red':hasError}">Class Binding1</div>
    <br><br><br><br>
    <p>v-bind:class="[activeClass, errorClass] 배열 형식 원하는 값 줄수 없음</p>
    <div class="container" v-bind:class="[activeClass, errorClass]">Class Binding2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      activeClass: "active",
      errorClass: "text-red"
    };
  }
};
</script>

<style scoped>
.active {
  background-color: yellow;
  font-weight: bold;
  border: 1px solid black;
}
.text-red {
  color: red;
}
</style>