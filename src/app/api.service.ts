  
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  URL: 'http://localhost/webservice/api/BaseModel.php';

 constructor(private http: HttpClient) {

 }

 getConfig() {
  return this.http.get(this.URL);
}

}
