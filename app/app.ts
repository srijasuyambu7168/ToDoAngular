import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoList } from './todo-list/todo-list';
import { TodoItem } from './todo-item/todo-item';
import { AddTodo } from './add-todo/add-todo';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, TodoList, TodoItem, AddTodo, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'ToDoApp';
}



