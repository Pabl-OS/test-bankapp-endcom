import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Account } from '../interfaces/Account';
import { Balances } from '../interfaces/Balances';
import { Cards } from '../interfaces/Cards';
import { Movements } from '../interfaces/Movements';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private baseUrl:string = environment.BASE_API;
  private endpoint:string ='bankappTest'
  constructor(private _http:HttpClient) { }

  private _getHeaders() {
    return new HttpHeaders({ 'content-Type': 'application/json'});
  }

  public getCards():Observable<Cards> {
    return  this._http.get<Cards>(`${this.baseUrl}${this.endpoint}/tarjetas`, { headers: this._getHeaders() })
  }

  public getAccount():Observable<Account> {
    return  this._http.get<Account>(`${this.baseUrl}${this.endpoint}/cuenta`, { headers: this._getHeaders() })
  }

  public getBalances():Observable<Balances> {
    return  this._http.get<Balances>(`${this.baseUrl}${this.endpoint}/saldos`, { headers: this._getHeaders() })
  }

  public getMovements():Observable<Movements> {
    return  this._http.get<any>(`${this.baseUrl}${this.endpoint}/movimientos`, { headers: this._getHeaders() })
  }
}
