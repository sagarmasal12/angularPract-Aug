import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(res: IUser) {
    this.http.post(
      'https://freeapi.miniprojectideas.com/api/User/CreateNewUser',
      res
    );
  }
}
