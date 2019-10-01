import { Injectable } from '@angular/core';
import { Todo } from "../todo/todo.model"

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todoList: Todo[] = [];

  addTodo(newItem) {
    let x = this.todoList.length;
    const newTodo: Todo = {
      id: x,
      todo: newItem,
      completed: false
    }
    this.todoList.push(newTodo)
  }

  todoCompleted(index) {
    this.todoList[index].completed = !this.todoList[index].completed
  }

  deleteItem(index) {
    this.todoList.splice(index,1);
  }

}
