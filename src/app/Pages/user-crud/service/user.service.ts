import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private apiUrl = 'http://localhost:6100';

  private users: IUser[] = [];
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  adduser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, this.users);
  }

  updateUser(id: number, user: IUser) {
    return this.http.put<IUser>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(res: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${res}`);
  }
}
