<template>
  <div>
    <p>methods로 클릭 시 호출될 함수 작성</p>
    <button type="button" @click="increaseCounter">Add 1</button> 
    <p>The counter is : {{ counter }}</p>
    <br><br><br>
    <p>setCount(x)로 x에 지정한 값을 전달</p>
    <button type="button" @click="setCount(7)">click</button>
    <p>number : {{ seven }}</p>
    <br><br><br>
    <p>함수 2개 동시호출</p>
    <button type="button" @click="one(), two()">click</button>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      seven: 0,
      text: ''
    };
  },
  methods : {
    increaseCounter () {
        this.counter = this.counter + 1 ;
    },
    setCount (seven) {
        this.seven = seven
    },
    one () {
        this.text = 'one '
    },
    two () {
        this.text += 'two'
    }
  }
};
</script>

<style scoped>
</style>