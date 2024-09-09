import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../domain/customer';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrl: './horizontal.component.css'
})
export class HorizontalComponent {
  customers!: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersMedium().then((data) => {
          this.customers = data;
      });
  }

  formatCurrency(value: number) {
      return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}
