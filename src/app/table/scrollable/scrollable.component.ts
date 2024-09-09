import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrl: './scrollable.component.css'
})
export class ScrollableComponent {
  customers!: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersLarge().then((customers) => (this.customers = customers));
  }
}
