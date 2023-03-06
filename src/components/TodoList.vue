<template>
  <div>
    Your Todo List
    <div v-for="todo in allTodos" :key="todo.id">
      <TodoItems :todo="todo" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import TodoItems from "./TodoItems.vue";

export default Vue.extend({
  name: "TodoList",
  components: { TodoItems },
  computed: {
    ...mapGetters(["allTodos"]),
  },
});
</script>

<style scoped></style>
