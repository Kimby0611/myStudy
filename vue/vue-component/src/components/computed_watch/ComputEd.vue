<template>
  <div>
    <h1>Full Name: {{ fullName }}</h1>
  </div>
</template>

<script>
export default {

  data() {
    return {
      firstName: 'Seungwon',
      lastName: 'Go'
    };
  },
  computed: {
    fullName () {
        return this.firstName + " " + this.lastName;
    }
  }
};
</script>

<style scoped>
</style>