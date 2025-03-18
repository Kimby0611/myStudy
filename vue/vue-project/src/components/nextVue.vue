<template>
  <div>
    <div>
        <h1>{{ firstName + ' ' + lastName }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      firstName: 'Seungwon',
      lastName: 'Go'
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>