import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'typing';
  randomSentence = faker.lorem.sentence(3);
  enteredText = '';
  onInput(event: Event) {
    this.enteredText = (event.target as HTMLInputElement).value;
  }
}
