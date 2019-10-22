import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmphomeComponent } from './emphome.component';


const routes: Routes = [
  {path : '', component : EmphomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmphomeRoutingModule { }
