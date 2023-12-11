import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreditFormModule } from './credit-form/credit-form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, CreditFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
