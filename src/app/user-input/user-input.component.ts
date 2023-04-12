import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'],
})
export class UserInputComponent {
  @Output() newWord = new EventEmitter<string>();
  userInput = '';

  onSubmit() {
    this.newWord.emit(this.userInput);
    this.userInput = '';
  }
}
