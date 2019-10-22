import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { APIService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public showEmployee;
  Empployee:any;
  public EmployeeID_Show;
  public FirstName_Show;
  
  EmployeeID = new FormControl('');
  FirstName = new FormControl('');
  LastName = new FormControl('');
  Username = new FormControl('');
  Password = new FormControl('');
  Tel = new FormControl('');
  position = new FormControl('');
 
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient,
  ) { }

  ngOnInit() {
    this.http.get("http://localhost/webservice/api/getemployee.php").subscribe(
      (data: any) => {
        console.log(data);
        this.showEmployee = data;
        console.log(this.showEmployee);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateEmp(
    EmployeeID,FirstName,LastName,Username,Password,Tel,position
  ) {
    this.EmployeeID = new FormControl(EmployeeID);
    this.FirstName = new FormControl(FirstName);
    this.LastName = new FormControl(LastName);
    this.Username = new FormControl(Username);
    this.Password = new FormControl(Password);
    this.Tel = new FormControl(Tel);
    this.position = new FormControl(position);
 

  }
  public updateEmployee() {
    const body = 'EmployeeID=' + this.EmployeeID.value
    // + '&Prefix=' + this.Prefix.value
    + '&FirstName=' + this.FirstName.value
    + '&LastName=' + this.LastName.value
    + '&Username=' + this.Username.value
    + '&Password=' + this.Password.value
    + '&Tel=' + this.Tel.value
    + '&position=' + this.position.value
   
    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/webservice/api/UpdateEmp.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.Empployee = data[0];
          setTimeout(() => {
          window.location.reload();
            
          }, 1000);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  

  deleteEmp(id, name) {
    this.EmployeeID_Show = id;
    this.FirstName_Show = name;
  }
  
  ondelete(){
    this.http
    .get(
      'http://localhost/webservice/API/deletEmp.php?EmployeeID=' + this.EmployeeID_Show
    )
    .subscribe(
      (data: any) => {
        console.log(data[0]);
        this.Empployee = data[0];
        window.location.reload();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
      

}
