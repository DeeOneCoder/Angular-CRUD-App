import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  id: number;
  customer: Customer = new Customer();
  constructor(private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }

  onSubmit() {
    this.customerService.updateCustomer(this.id, this.customer).subscribe(data => {
      this.customer = data;
      this.goToCustomerList();
    });





  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomerById(this.id).subscribe(data => {
      this.customer = data;
    });
  }

  goToCustomerList() {
    this.router.navigate(['/customers']);
  }


}
