import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo-item',
  imports: [FormsModule, CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})

export class TodoItem {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<{id:number,title:string}>();

  editing = false;
  editTitle = '';

  startEdit() {
    this.editing = true;
    this.editTitle = this.todo.title;
  }

  saveEdit() {
    if (this.editTitle.trim()) {
      this.edit.emit({ id: this.todo.id, title: this.editTitle });
    }
    this.editing = false;
  }

  cancelEdit() {
    this.editing = false;
  }
}
