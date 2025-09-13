import { Component, OnInit } from '@angular/core';
import { TodoSvc } from '../todo-svc';
import { Todo } from '../models/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddTodo } from '../add-todo/add-todo';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule, CommonModule, TodoItem, AddTodo],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {
  todos: Todo[] = [];

  constructor(private todoSvc: TodoSvc) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.todos = this.todoSvc.getAll();
  }

  onAdd(title: string) {
    this.todoSvc.add(title);
    this.load();
  }

  onToggle(id: number) {
    this.todoSvc.toggle(id);
    this.load();
  }

  onDelete(id: number) {
    this.todoSvc.delete(id);
    this.load();
  }

  onEdit(payload: {id:number,title:string}) {
    this.todoSvc.updateTitle(payload.id, payload.title);
    this.load();
  }

  clearCompleted() {
    this.todoSvc.clearCompleted();
    this.load();
  }
}