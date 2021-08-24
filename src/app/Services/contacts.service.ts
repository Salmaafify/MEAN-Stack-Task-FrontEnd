import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  apiURL = 'http://localhost:4000/contacts'
  constructor(private httpClient: HttpClient) { }

  getContacts(){
    return this.httpClient.get(this.apiURL +'?page=1')
  }
  addNewContact(data:any):Observable<any>{
    return this.httpClient.post(this.apiURL,data);
  }

  editContact(id:any,data:any):Observable<any>{
    return this.httpClient.patch(this.apiURL+'/'+id,data)
  }

  deleteContact(id:any):Observable<any>{
    return this.httpClient.delete(this.apiURL +'/'+id);
  }
}
