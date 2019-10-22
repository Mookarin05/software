import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllhistoryRoutingModule } from './allhistory-routing.module';
import { AllhistoryComponent } from './allhistory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllhistoryComponent],
  imports: [
    CommonModule,
    AllhistoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AllhistoryModule { }
