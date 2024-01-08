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
  public miles: number | undefined;

  car = {
    make: "Toyota",
    model: "Camry",
    year: 2010,
  }

  onNameChange(event: Event) {
    this.payName = (event.target as HTMLInputElement).value;
  }
  onDateChange(event: Event) {
    this.paymentDate = (event.target as HTMLInputElement).value;
  }
  onAmountChange(event: Event) {
    this.amount = parseFloat((event.target as HTMLInputElement).value);
  }
  onHeightChange(event: Event) {
    this.height = parseFloat((event.target as HTMLInputElement).value);
  }
  onMilesChange(event: Event) {
    this.miles = parseFloat((event.target as HTMLInputElement).value);
  }
}
