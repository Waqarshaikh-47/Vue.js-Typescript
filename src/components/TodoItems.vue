<template>
  <div>
    <div class="row my-3 align-items-center justify-content-between">
      <h3 class="col" v-if="!editing">{{ todo.title }}</h3>

      <input
        v-else
        type="text"
        :value="todoText"
        @change="todoTextChange"
        class="col form-control"
      />
      <button class="btn btn-primary mr-2" @click="updateTodoI(todo)">
        {{ editing ? "Update" : "Edit" }}
      </button>
      <button class="btn btn-danger" @click="deleteTodo(todo.id)">
        Delete
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { TodoObj } from "@/store/types";
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "TodoItems",
  components: {},
  props: ["todo"],
  data() {
    return {
      todoText: "",
      editing: false,
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    updateTodoI(todo: TodoObj) {
      this.editing = !this.editing;
      if (this.editing) {
        this.todoText = todo.title;
        console.log(todo.title);
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
        this.updateTodo(todo);
      }
    },
    todoTextChange(e: Event) {
      this.todoText = (e.target as HTMLInputElement).value;
    },
  },
});
</script>

<style scoped></style>
