import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule
  ],
})
export class ElementsModule { }
