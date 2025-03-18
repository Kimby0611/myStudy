<template>
  <div>
    <p>checked: [] 배열로 저장</p>
    <label>
      <input type="checkbox" v-model="checked" value="서울" />서울
    </label>
    <label>
      <input type="checkbox" v-model="checked" value="부산" />부산
    </label>
    <label>
      <input type="checkbox" v-model="checked" value="제주" />제주
    </label>
    <br />
    <br />
    <span>체크한 지역: {{ checked }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: []
    };
  }
};
</script>

<style scoped>
</style>