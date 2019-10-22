import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.scss']
})
export class EmphomeComponent implements OnInit {

  public show;
  Product: any;
  public ProductID_Show;
  public Quantity_Show;
  
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
    this.http.get("http://localhost/webservice/api/getproduct.php").subscribe(
      (data: any) => {
         console.log(data);
        this.show = data;
        //console.log(this.show);
        
      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  name = localStorage.getItem('FirstName');
  Lastname = localStorage.getItem('LastName');
//ออกจากระบบ
  click(){
    localStorage.clear();
    setTimeout(() => {
      this.router.navigate(['/home']);
      }, 1000);
  }

}
