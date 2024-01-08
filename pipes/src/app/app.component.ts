import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipes';

  public payName: string | undefined;
  public paymentDate: string | undefined;
  public amount: number | undefined;
  public height: number | undefined;

  onNameChange(event: Event) {
    this.payName = (event.target as HTMLInputElement).value;
    console.log(this.payName);
  }
  onDateChange(event: Event) {
    this.paymentDate = (event.target as HTMLInputElement).value;
    console.log(this.paymentDate);
  }
  onAmountChange(event: Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
    console.log(this.paymentDate);
  }
  onHeightChange(event: Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
    console.log(this.paymentDate);
  }
}
