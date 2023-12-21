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
  submitted = false;
  days: any = [];
  months: any = [];
  disabledMonths: any = [];
  disabledYears: any = [];
  years: any = [];





  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.minLength(11), Validators.pattern("^\\+?[1-9]\\d{1,14}$")]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[A-Za-z])(?=.*\\W).*$")]],
      day: ['', Validators.required],
      month: [{ value: '', disabled: true }, Validators.required],
      year: [{ value: '', disabled: true }, Validators.required],
      gender: ['', Validators.required],
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

  onDayChange(event: any) {
    const selectedDay = event.target.value;
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    if (selectedDay == '31') {
      this.disabledMonths = ['February', 'April', 'June', 'September', 'November'];
    } else if (selectedDay == "30") {
      this.disabledMonths = ["February"];
    } else if (selectedDay == "29") {
      this.disabledMonths = ["February"];
      for (let year = 1900; year <= currentYear; year++) {
        if (!((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)) {
          this.disabledYears.push(year);
        }
      }
    } else {
      this.disabledMonths = [];
    }
  }


  // onMonthChange(event: any) {
  //   const selectedMonth = event.target.value;
  //   const currentDate = new Date();
  //   const currentDay = currentDate.getDate();
  //   const currentMonth = currentDate.getMonth() + 1;
  //   const currentYear = currentDate.getFullYear();
  //   if ((selectedMonth > currentMonth)) {
  //     this.disabledYears = [currentYear]
  //   }
  // }

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
    this.submitted = true;
  }
}
