import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  login(data :any) : Observable<any>{
    return this.httpClient.post(`http://localhost:8080/login`, data);
  }
}
