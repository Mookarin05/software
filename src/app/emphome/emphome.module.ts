import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmphomeRoutingModule } from './emphome-routing.module';
import { EmphomeComponent } from './emphome.component';


@NgModule({
  declarations: [EmphomeComponent],
  imports: [
    CommonModule,
    EmphomeRoutingModule
  ]
})
export class EmphomeModule { }
