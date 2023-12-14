import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

// mazhar code 

  public date = new Date();

  public  maxDay = this.date.getDate();
  public  maxMonth = this.date.getMonth() + 1;
  public  maxYear = this.date.getFullYear();


  profileForm: FormGroup;

  // days = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  // currentYear = new Date().getFullYear();
  // years = Array.from({ length: this.currentYear - 1950 + 1 }, (_, i) => (1950 + i).toString());

  // months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', [Validators.required, this.validateYear]],
    });
  }

  ngOnInit(): void {
    this.populateDateDropdowns();

   
  }

  validateYear = (control :any) => {
    const selectedYear = control.value;
    // console.log('Selected Year:', selectedYear);
    // console.log('Current Year:', this.currentYear);

    // if (selectedYear > this.currentYear) {
    //   return { futureYear: true };
    // }
    // return null;
  }
days : any = [];
months : any = [];
years: any = [];


  populateDateDropdowns(){

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


  /**
   *  event date ( change ) => date => 
   * both will be checked on selectedMonth method 
   * based on this year will be enabled and disabled
   * 
   */
}
