import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  templateUrl: './add-todo.html',
  imports: [FormsModule, CommonModule]
})
export class AddTodo {
  @Output() add = new EventEmitter<string>(); // ✅ type string
  title: string = '';

  submit() {
    this.add.emit(this.title); // ✅ sends string
    this.title = '';
  }
}
