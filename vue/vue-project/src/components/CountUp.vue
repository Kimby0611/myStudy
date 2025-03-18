<template>
  <div>
    <h2>클릭하면 카운터가 올라갑니다.</h2>
    <div>
      <p>{{ count }}회</p>
      <button @click="countUp">카운터</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountUp",
  data() {
    return {
      count: 0
    };
  },
  methods: {
    countUp() {
      this.count++;
    }
  }
};
</script>

<style>
</style>