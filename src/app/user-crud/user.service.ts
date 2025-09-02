import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl =
    'https://freeapi.miniprojectideas.com/api/User/CreateNewUser';
  constructor(private http: HttpClient) {}

  addUser(res: IUser) {
    return this.http.post(`${this.apiUrl}`, res);
  }
}
