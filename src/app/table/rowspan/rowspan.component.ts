import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-rowspan',
  templateUrl: './rowspan.component.html',
  styleUrl: './rowspan.component.css'
})
export class RowspanComponent {
  customers!: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersMedium().then((data) => {
          this.customers = data;
      });
  }

  calculateCustomerTotal(name: string) {
      let total = 0;

      if (this.customers) {
          for (let customer of this.customers) {
              if (customer.representative?.name === name) {
                  total++;
              }
          }
      }

      return total;
  }

  getSeverity(status: string): "success" | "info" | "warning" | "danger" | undefined {
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
            return undefined; // Return undefined instead of null
        default:
            return undefined; // Fallback for unhandled cases
    }
}
}
