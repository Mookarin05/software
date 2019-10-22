import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllhistoryComponent } from './allhistory.component';

const routes: Routes = [
  {path: "",component:AllhistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllhistoryRoutingModule { }
