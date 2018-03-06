import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';

/*
  This component simply receives a todo object through its todo property 
  and displays it.

  The TodoComponent will only present the list of todos. 
  The TodooDetailsComponent will present details of a selected todo.
*/
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

@Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

}
