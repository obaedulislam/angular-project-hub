import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';

  payName: string | undefined;

  onNameChange(event: Event) {
    this.payName = (event.target as HTMLInputElement).value;
    console.log(this.payName);
  }
}
