import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../models/bank.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BanksService {
  baseApiUrl: string = "https://localhost:7245";

  constructor(private http: HttpClient) { }

  getAllBanks(): Observable<Bank[]> {
    return this.http.get<Bank[]>(this.baseApiUrl + '/api/Banks/GetAllBanks');
  }

  addBank(newBank: Bank){
    newBank.id=0;
    return this.http.post<Bank>(this.baseApiUrl + '/api/Banks/AddBank', newBank);
  }

  getBank(id: number): Observable<Bank>{
    return this.http.get<Bank>(this.baseApiUrl + '/api/Banks/GetBankByID/' + id);
  }

  updateBank(id: number, updateBankDTO: Bank): Observable<Bank>{
    return this.http.put<Bank>(this.baseApiUrl + '/api/Banks/' + id, updateBankDTO);
  }
}
