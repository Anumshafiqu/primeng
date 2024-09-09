import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../domain/customer';

@Component({
  selector: 'app-rowgroup',
  templateUrl: './rowgroup.component.html',
  styleUrl: './rowgroup.component.css'
})
export class RowgroupComponent {
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
            return undefined; // Change 'null' to 'undefined'
        default:
            return undefined; // Handle unexpected cases
    }
}
}
