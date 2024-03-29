import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  private baseURL = "https://latest-deploy-y6pgg27sca-ew.a.run.app/api/v1/customers";
  // private baseURL = "http://localhost:8080/api/v1/customers";
  //private baseURL = "https://ecstatic-branch-368109.ew.r.appspot.com/";

  constructor(private httpClient: HttpClient) { }

  getCustomerList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseURL);
  }

  createCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, customer);
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.baseURL}/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }



}
