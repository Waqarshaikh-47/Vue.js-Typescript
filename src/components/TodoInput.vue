<template>
  <div>
    <div class="row">
      <input
        placeholder="New todo"
        type="text"
        @change="todoTextChange"
        v-bind:value="todoText"
        class="col form-control mx-2"
      /><button @click="addTodoI" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";
// @ts-ignore
import { v1 } from "uuid";

export default Vue.extend({
  name: "TodoInput",
  components: {},
  data() {
    return {
      todoText: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    addTodoI() {
      this.addTodo({
        id: v1(),
        title: this.todoText,
      });
    },
    todoTextChange(event: Event) {
      this.todoText = (event.target as HTMLInputElement).value;
      // console.log(event.target?.value);
    },
  },
});
</script>

<style scoped></style>
