import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deposits } from './deposits';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class DepositService {


  private baseURL = "http://localhost:8080/api/v1/deposits";

  constructor(private httpClient: HttpClient, private customer: Customer) { }

  getDepositsList(): Observable<Deposits[]> {
    return this.httpClient.get<Deposits[]>(this.baseURL);
  }

  createDeposit(deposit: Deposits): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, deposit);
  }

  getDepositsByCustomerId(id: number): Observable<Deposits> {
    return this.httpClient.get<Deposits>(`${this.baseURL}/${this.customer.id}`);
  }

  updateDeposits(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.baseURL}/${id}`, customer);
  }


}