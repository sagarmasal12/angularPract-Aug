import { Injectable } from '@angular/core';
import { BusUser } from './practice.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PracticeApiService {
  private user: BusUser[] = [];

  constructor(private http: HttpClient) {}

  addBusUser(res: BusUser): Observable<BusUser> {
    debugger;
    return this.http.post<BusUser>(
      'https://api.freeprojectapi.com/api/BusBooking/AddNewUser',
      res
    );
  }
}
