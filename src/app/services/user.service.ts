import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "https://jsonplaceholder.cypress.io/"

  constructor(private http: HttpClient) { }

  listUsers() {
    return this.http.get(this.baseUrl + 'users/');
  }

  viewUser(id: string) {
    return this.http.get(this.baseUrl + 'users/' + id);
  }



}
