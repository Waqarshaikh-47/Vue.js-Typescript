export interface RootState {
  todos: Array<TodoObj>;
}

export interface TodoObj {
  id: any;
  title: string;
}
