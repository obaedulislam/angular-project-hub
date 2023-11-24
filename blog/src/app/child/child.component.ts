import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  // @Output() updateDataEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
