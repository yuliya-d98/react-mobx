import { makeAutoObservable, runInAction } from "mobx";

class Todo {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }

  completeTodo(todo) {
    console.log("todo = ", todo.id);
    todo.completed = !todo.completed;
  }

  fetchTodo() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => runInAction(() => (this.todos = json)));
  }
}

export default new Todo();
