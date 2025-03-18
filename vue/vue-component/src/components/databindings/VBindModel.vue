<template>
    <div>
      <!-- v-bind 사용 -->
      <h3>v-bind 예제</h3>
      <input type="text" :value="bindValue" />
      <p>bindValue: {{ bindValue }}</p>
      <button @click="changeBindValue">값 변경 (v-bind)</button>
  
      <!-- v-model 사용 -->
      <h3>v-model 예제</h3>
      <input type="text" v-model="modelValue" />
      <p>modelValue: {{ modelValue }}</p>
      <button @click="changeModelValue">값 변경 (v-model)</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        bindValue: 'v-bind 초기값',
        modelValue: 'v-model 초기값'
      };
    },
    methods: {
      changeBindValue() {
        this.bindValue = 'v-bind 바뀜!';
      },
      changeModelValue() {
        this.modelValue = 'v-model 바뀜!';
      }
    }
  };
  </script>
  
  <style scoped>
  input {
    margin-bottom: 10px;
  }
  </style>