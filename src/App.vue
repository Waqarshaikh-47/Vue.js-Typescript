<template>
  <div id="app" class="container">
    <TodoInput />
    <TodoList />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
export default Vue.extend({
  name: "App",
  components: { TodoInput, TodoList },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
