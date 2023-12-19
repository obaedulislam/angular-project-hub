import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  // All variable 
  public date = new Date();
  public maxYear = this.date.getFullYear();

  profileForm: FormGroup;
  days: any = [];
  months: any = [];
  years: any = [];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      day: ['', Validators.required],
      month: [{ value: '', disabled: true }, Validators.required],
      year: [{ value: '', disabled: true }, Validators.required],
    });

  }

  ngOnInit(): void {
    this.populateDateDropdowns();

    // get all form  control 
    const dayControl = this.profileForm.get('day');
    const monthControl = this.profileForm.get('month');
    const yearControl = this.profileForm.get('year');

    if (dayControl && monthControl && yearControl) {

      //Enable Month after select Day
      dayControl.valueChanges.subscribe(selectedDay => {
        if (selectedDay) {
          monthControl.enable();
        } else {
          monthControl.disable();
        }
      });

      //Enable Year after select Month
      monthControl.valueChanges.subscribe(selectedMonth => {
        if (selectedMonth) {
          yearControl.enable();
        } else {
          yearControl.disable();
        }
      });

    }
  }

  populateDateDropdowns() {
    /// date population 
    for (let day = 1; day <= 31; day++) {
      this.days.push(day);
    }

    // month population
    for (let month = 0; month < 12; month++) {
      const monthDate = new Date(1950, month, 1); // Using 2000 as a reference year
      const monthName = monthDate.toLocaleString('en-US', { month: 'long' });
      this.months.push(monthName);
    }

    // year population from 1950 - till year of today
    const startYear = 1950;
    for (let year = startYear; year <= this.maxYear; year++) {
      this.years.push(year);
    }
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}
