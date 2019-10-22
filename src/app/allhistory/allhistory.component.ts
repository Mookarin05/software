import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { APIService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-allhistory',
  templateUrl: './allhistory.component.html',
  styleUrls: ['./allhistory.component.scss']
})
export class AllhistoryComponent implements OnInit {

  public showEmployee;
  
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
}
