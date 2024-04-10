import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../modules/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient : HttpClient) { }

  register(data : User) : Observable<any>{
    return this.httpClient.post(`http://localhost:8080/register `, data);
  }
}
