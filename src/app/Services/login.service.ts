import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiURL = 'http://localhost:4000/users'
  constructor(private httpClient: HttpClient) { }

  login(data:any){
    return this.httpClient.post(this.apiURL + '/login',data);
  }

  getUsers(){
    return this.httpClient.get(this.apiURL);
  }
}
