import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../domain/customer';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrl: './expandable.component.css',
  styles: [
    `:host ::ng-deep .p-rowgroup-footer td {
        font-weight: 700;
    }
    
    :host ::ng-deep .p-rowgroup-header {
        span {
            font-weight: 700;
        }
    
        .p-row-toggler {
            vertical-align: middle;
            margin-right: .25rem;
        }
    }`
],
})
export class ExpandableComponent {
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
            return undefined; // Return undefined instead of null
        default:
            return undefined; // Handle unexpected cases
    }
}
}
