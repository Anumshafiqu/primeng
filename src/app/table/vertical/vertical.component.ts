import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.css'
})
export class VerticalComponent {
  customers!: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersMedium().then((data) => {
          this.customers = data;
      });
  }
}
