import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ibankloan } from './bankload.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankloanService {
  apiUrl = 'https://projectapi.gerasim.in/api/BankLoan/GetAllUsers';

  private bankloan: Ibankloan[] = [];

  constructor(private http: HttpClient) {}

  getloanUser(): Observable<Ibankloan[]> {
    return this.http.get<Ibankloan[]>(this.apiUrl);
  }
}
