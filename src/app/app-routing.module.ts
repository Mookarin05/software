import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: " ", redirectTo: "/home", pathMatch: "full" },
   { path: "home",loadChildren: "./home/home.module#HomeModule" },
   { path: "admin",loadChildren: "./admin/admin.module#AdminModule" },
   { path: "employee",loadChildren: "./employee/employee.module#EmployeeModule" },
   { path: "emphome",loadChildren: "./emphome/emphome.module#EmphomeModule" },
   { path: "allhistory",loadChildren: "./allhistory/allhistory.module#AllhistoryModule" },
   { path: "history",loadChildren: "./history/history.module#HistoryModule" },
   { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
