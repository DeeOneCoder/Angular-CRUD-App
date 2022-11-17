import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { DepositService } from '../deposit.service';
import { Deposits } from '../deposits';

@Component({
  selector: 'app-add-deposit',
  templateUrl: './add-deposit.component.html',
  styleUrls: ['./add-deposit.component.css']
})
export class AddDepositComponent implements OnInit {

  deposits: Deposits;
  customer_id: number;
  customer: Customer;
  fullName: string;
  deposit: number;
  posted_date: Date;


  constructor(private router: Router, private depositService: DepositService) {
    depositService.getDepositsByCustomerId(this.customer_id).subscribe(data => {
      this.deposits = data;
    })
  }

  ngOnInit(): void {
    this.customer_id = this.customer.id;
    this.fullName = this.customer.firstName + " " + this.customer.lastName;
    this.router.navigate(['add-deposit', this.customer]);
  }

}
