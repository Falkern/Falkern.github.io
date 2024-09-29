
<!--
  This is a dummy file.
  Still testing out the Vue.js code privately
-->

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


<template>
  <div id="todo-app">
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed" />
        <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
#todo-app {
  max-width: 400px;
  margin: auto;
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin-left: 10px;
}
</style>

<template>
  <div id="weather-widget">
    <h1>Weather in {{ city }}</h1>
    <p>Temperature: {{ weather.temperature }} °C</p>
    <p>Condition: {{ weather.condition }}</p>
    <input v-model="city" @keyup.enter="fetchWeather" placeholder="Enter city" />
    <button @click="fetchWeather">Get Weather</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: 'London',
      weather: {
        temperature: 20,
        condition: 'Sunny',
      },
    };
  },
  methods: {
    fetchWeather() {
      // Mocked weather data for illustration
      this.weather = {
        temperature: Math.floor(Math.random() * 30),
        condition: Math.random() > 0.5 ? 'Sunny' : 'Cloudy',
      };
    },
  },
};
</script>

<style scoped>
#weather-widget {
  text-align: center;
}
input {
  padding: 8px;
  margin: 10px 0;
}
button {
  padding: 8px 12px;
}
</style>

<template>
  <div id="app">
    <h1>Modal Example</h1>
    <button @click="showModal = true">Open Modal</button>
    <modal :isVisible="showModal" @close="showModal = false">
      <h2>This is a Modal!</h2>
      <p>You can place any content here.</p>
    </modal>
  </div>
</template>

<script>
import Modal from './Modal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
}
</style>
