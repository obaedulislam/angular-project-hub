import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormRoutingModule } from './signup-form-routing.module';
import { SignupFormComponent } from './signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    SignupFormRoutingModule, ReactiveFormsModule
  ],
  exports: [
    SignupFormComponent
  ]
})
export class SignupFormModule { }
