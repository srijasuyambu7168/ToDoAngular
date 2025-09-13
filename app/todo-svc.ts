import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({ providedIn: 'root' })
export class TodoSvc {
  private storageKey = 'angular_todos_v1';
  private todos: Todo[] = [];

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.todos));
  }

  private load() {
    const raw = localStorage.getItem(this.storageKey);
    this.todos = raw ? JSON.parse(raw) : [];
  }

  getAll(): Todo[] {
    // return a copy
    return [...this.todos];
  }

  add(title: string) {
    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    this.todos.unshift(newTodo);
    this.save();
  }

  toggle(id: number) {
    const t = this.todos.find(x => x.id === id);
    if (t) {
      t.completed = !t.completed;
      this.save();
    }
  }

  updateTitle(id: number, title: string) {
    const t = this.todos.find(x => x.id === id);
    if (t && title.trim()) {
      t.title = title.trim();
      this.save();
    }
  }

  delete(id: number) {
    this.todos = this.todos.filter(x => x.id !== id);
    this.save();
  }

  clearCompleted() {
    this.todos = this.todos.filter(x => !x.completed);
    this.save();
  }
}