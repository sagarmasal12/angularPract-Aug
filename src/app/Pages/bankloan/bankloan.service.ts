import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ibankloan } from './bankload.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankloanService {
  apiUrl = 'https://projectapi.gerasim.in/api/BankLoan';

  private bankloan: Ibankloan[] = [];

  constructor(private http: HttpClient) {}

  getloanUser(): Observable<Ibankloan[]> {
    return this.http.get<Ibankloan[]>(`${this.apiUrl}/GetAllUsers`);
  }

  addbankUsers(res: any) {
    return this.http.post(
      'https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer',
      res,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  onDelete(id: number) {
    return this.http.delete(
      'https://projectapi.gerasim.in/api/BankLoan/DeleteUserByUserId/' + id
    );
    //  (this.bankloan = this.bankloan.filter((id) => id.userId));
    // this.getloanUser();
  }
}
