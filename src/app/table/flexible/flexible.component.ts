import { Component } from '@angular/core';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-flexible',
  templateUrl: './flexible.component.html',
  styleUrl: './flexible.component.css'
})
export class FlexibleComponent {
  customers!: Customer[];

  dialogVisible: boolean = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersMedium().then((data) => {
          this.customers = data;
      });
  }

  showDialog() {
      this.dialogVisible = true;
  }
}
