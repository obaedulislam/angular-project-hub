import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditFormRoutingModule } from './credit-form-routing.module';
import { CreditFormComponent } from './credit-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';

@NgModule({
  declarations: [CreditFormComponent],
  imports: [
    CommonModule,
    CreditFormRoutingModule,
    ReactiveFormsModule,
    InputModule,
  ],
  exports: [CreditFormComponent],
})
export class CreditFormModule {}
