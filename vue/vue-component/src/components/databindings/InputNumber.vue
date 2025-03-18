<template>
  <div>
    <p>type="number" v-model.number="xx"</p>
    <input type="number" v-model.number="numberModel" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberModel: 3
    };
  }
};
</script>

<style scoped>
</style>