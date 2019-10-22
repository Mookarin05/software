import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  APIService
} from "./../api.service";
import {
  Router
} from "@angular/router";
import {
  Component,
  OnInit
} from "@angular/core";

import {
  FormControl
} from "@angular/forms";
import {
  ActivatedRoute
} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public show;


  ProductID = new FormControl('');
  CategoryID = new FormControl('');
  ProductName = new FormControl('');
  QuantityProduct = new FormControl('');
  Price = new FormControl('');
  ProductPic = new FormControl('');

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


  click(u: string, p: string) {

    if (u && p) {

      this.APILogin(u, p);
      console.log(0, 0);

    }

  }

  APILogin(Username, Password) {
    const body = 'Username=' + Username
      + '&Password=' + Password
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/webservice/api/Login.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);

          try {

            if (data == 0) {
              alert("กรอกรหัสให้ถูกต้อง")
            } else {
              localStorage.setItem('FirstName', data[0].FirstName);
              localStorage.setItem('LastName', data[0].LastName);
              localStorage.setItem('EmployeeID', data[0].EmployeeID);


              console.log(localStorage.getItem('FirstName'));
              console.log(localStorage.getItem('LastName'));
              console.log(localStorage.getItem('EmployeeID'));
              if(Username == 'Admin' && Password == 1234){
                try {
                  this.router.navigate(['/admin']);
                } catch (error) {
                  console.log(error);
                }
              }else{
                try {
                  this.router.navigate(['/emphome']);
                } catch (error) {
                  console.log(error);
                }
              }

              
            }

          } catch (error) {
            console.log(error);

          }
        },
        (error: any) => {
          console.log(error);
        }
      );

  }

}
