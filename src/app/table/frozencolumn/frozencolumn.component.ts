import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-frozencolumn',
  templateUrl: './frozencolumn.component.html',
  styleUrl: './frozencolumn.component.css',
  styles: [
    `:host ::ng-deep  .p-frozen-column {
        font-weight: bold;
    }
    :host ::ng-deep .p-datatable-frozen-tbody {
        font-weight: bold;
    }`
],
})
export class FrozencolumnComponent {
  balanceFrozen: boolean = false;

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
