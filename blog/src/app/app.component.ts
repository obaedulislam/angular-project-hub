import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'blog';
  // displayVal: string = '';
  // getValue(val: string) {
  //   console.warn(val);
  //   this.displayVal = val;
  // }

  // //Counter Increment & Decrement
  // count = 0;
  // counter(type: string) {
  //   type === 'add' ? this.count++ : this.count--;
  // }

  title = 'Basic Form';
  userData: any = {};
  getData(formData: any) {
    console.warn(formData);
    this.userData = formData;
  }

  display = true;
  toggle() {
    this.display = !this.display;
  }

  // Task List Application

  list: any[] = [];
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.warn(item);
  }
  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter((item) => item.id !== id);
  }

  // //Update Data
  // updateData(text: string) {
  //   console.warn(text);
  // }
}
