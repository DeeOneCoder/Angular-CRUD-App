import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepositComponent } from './add-deposit/add-deposit.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'create-customer', component: CreateCustomerComponent },
  { path: 'update-customer/:id', component: UpdateCustomerComponent },
  { path: 'customer-details/:id', component: CustomerDetailsComponent },
  { path: 'add-deposit', component: AddDepositComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
