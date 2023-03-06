import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    todos: [
      {
        id: 1,
        title: "To Do ✓✓ ",
      },
    ],
  },
  getters: {
    allTodos: (state) => {
      return state.todos;
    },
  },
  mutations: {
    updateTodo(state, todo) {
      let Index = state.todos.findIndex((t) => {
        return t.id == todo.id;
      });
      if (Index != -1) {
        state.todos[Index] = todo;
      }
      console.log(Index);
    },
    addTodo(state, payload) {
      state.todos.push(payload);
      // console.log(state.todos);
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => {
        // console.log(state.todos);
        return todo.id != id;
      });
    },
  },
  actions: {
    updateTodo({ commit }, todo) {
      commit("updateTodo", todo);
    },
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
      console.log(todo);
    },
    deleteTodo({ commit }, id) {
      commit("deleteTodo", id);
      console.log(id);
    },
  },
  modules: {},
};

export default new Vuex.Store(store);
