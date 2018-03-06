import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODOS } from '../mock-todos'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

/* 
  static will change logic to dynamic later
  trying to understand basics first.
*/
todos = TODOS;

selectedTodo = Todo;

  constructor() { }

  ngOnInit() { 
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

}
