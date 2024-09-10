import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrl: './stateful.component.css'
})
export class StatefulComponent {
  customers!: Customer[];

  selectedCustomers!: Customer;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersMini().then((data) => (this.customers = data));
  }

  getSeverity(status: string): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return 'secondary';  // 'secondary' instead of null

        default:
            return undefined;  // Handle unexpected status with undefined
    }
}

}
