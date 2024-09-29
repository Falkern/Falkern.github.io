<template>
  <div id="app">
    <h1>Vue.js Counter</h1>
    <p>Current Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    },
    reset() {
      this.count = 0;
    },
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}
button {
  margin: 5px;
  padding: 10px;
}
</style>
