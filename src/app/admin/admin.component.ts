import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { APIService } from '../api.service';
import { FormControl } from '@angular/forms';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public show;
  Empployee: any;
  Product: any;
  upProduct: any;
  deProduct: any;
  with: any;
  public ProductID_Show;
  public Quantity_Show;
  public with_Show;
  public withdraw_Show;


  ProductID1
  CategoryID1
  ProductName1
  Quantity1
  Price1
  Image1



  EmployeeID = new FormControl('');
  FirstName = new FormControl('');
  LastName = new FormControl('');
  Username = new FormControl('');
  Password = new FormControl('');
  Tel = new FormControl('');
  position = new FormControl('');


  ProductID = new FormControl('');
  CategoryID = new FormControl('');
  ProductName = new FormControl('');
  Quantity = new FormControl('');
  Price = new FormControl('');
  Image = new FormControl('');

  withdrawID = new FormControl('');
  withdrawNum = new FormControl('');
  date = new FormControl('');


  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public api: APIService,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get("http://localhost/webservice/api/getproduct.php").subscribe(
      (data: any) => {
        console.log(data);
        this.show = data;
        console.log(this.show);

      },

      (error: any) => {
        console.log(error);
      }
    );
  }

  name = localStorage.getItem('FirstName');
  Lastname = localStorage.getItem('LastName');
  Emp_ID = localStorage.getItem('EmployeeID');

  InsertEmployee() {
    const body = 'EmployeeID=' + this.EmployeeID.value
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
      .post('http://localhost/webservice/api/insertemployee.php', body, {
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

  InsertProduct() {
    const body = 'ProductID=' + this.ProductID.value
      + '&CategoryID=' + this.CategoryID.value
      + '&ProductName=' + this.ProductName.value
      + '&Quantity=' + this.Quantity.value
      + '&Price=' + this.Price.value
      + '&Image=' + this.Image.value

    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/webservice/api/insertProduct.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.Product = data;
          console.log(this.Product);
          setTimeout(() => {
            window.location.reload();

          }, 1000);
        },
        (error: any) => {
          console.log(error);

        }
      );
  }


  updatePro(
    ProductID, CategoryID, ProductName, Quantity, Price
  ) {
    this.ProductID = new FormControl(ProductID);
    this.CategoryID = new FormControl(CategoryID);
    this.ProductName = new FormControl(ProductName);
    this.Quantity = new FormControl(Quantity);
    this.Price = new FormControl(Price);
    // this.ProductID1 = (ProductID);
    // this.CategoryID1 = (CategoryID);
    // this.ProductName1 = (ProductName);
    // this.Quantity1 = (Quantity);
    // this.Price1 = (Price);
    // this.Image1 = (Image);
  }
  public updateproduct() {
    const body = 'ProductID=' + this.ProductID.value
      + '&CategoryID=' + this.CategoryID.value
      + '&ProductName=' + this.ProductName.value
      + '&Quantity=' + this.Quantity.value
      + '&Price=' + this.Price.value
      + '&Image=' + this.Image.value;
    console.log(body);
    // console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/webservice/api/UpdatePro.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          console.log(data);
          this.upProduct = data[0];
          // setTimeout(() => {
          //   window.location.reload();

          //   }, 1000);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  deleteProduct(proid, quan) {
    this.ProductID_Show = proid;
    this.Quantity_Show = quan;
  }

  ondeleteproduct() {
    this.http
      .get(
        'http://localhost/webservice/API/deleteProduct.php?ProductID=' + this.ProductID_Show
      )
      .subscribe(
        (data: any) => {
          console.log(data[0]);
          this.deProduct = data[0];
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  withdraw() {
    const body = 'withdrawID=' + this.withdrawID.value
      + '&withdrawNum=' + this.withdrawNum.value
      + '&date=' + this.date.value
      + '&EmployeeID=' + this.Emp_ID
      + '&ProductID=' + this.withdraw_Show

    console.log(body);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.http
      .post('http://localhost/webservice/api/insertW.php', body, {
        headers: headers
      })
      .subscribe(
        (data: any) => {
          this.http
            .post('http://localhost/webservice/api/UpdateWith.php', body, {
              headers: headers
            })
            .subscribe(
              (data: any) => {
                console.log(data);
                this.with = data;
                console.log(this.with);
                // setTimeout(() => {
                //   window.location.reload();
                //   }, 1000);
              },
              (error: any) => {
                console.log(error);

              }
            );
          console.log(data);
          this.with = data;
          console.log(this.with);
        },
        (error: any) => {
          console.log(error);

        }
      );

  }

  showwith(EmployeeID, ProductID) {
    this.with_Show = EmployeeID;
    this.withdraw_Show = ProductID;
  }


  //ออกจากระบบ
  click() {
    localStorage.clear();
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 1000);
  }

}
