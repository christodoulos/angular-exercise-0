import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userInput = '';
  oddLengthWords: string[] = [];
  evenLengthWords: string[] = [];

  onNewWord(word: string) {
    if (word.length % 2 === 0) {
      this.evenLengthWords.push(word);
    } else {
      this.oddLengthWords.push(word);
    }
  }
}
