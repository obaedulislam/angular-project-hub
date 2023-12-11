import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css'],
})
export class CreditFormComponent implements OnInit {
  creditForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });
  constructor() {}
  ngOnInit() {}
}
