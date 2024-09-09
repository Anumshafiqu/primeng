import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../domain/customer';


@Component({
  selector: 'app-frozenrow',
  templateUrl: './frozenrow.component.html',
  styleUrl: './frozenrow.component.css'
})
export class FrozenrowComponent {
  unlockedCustomers!: Customer[];

  lockedCustomers!: Customer[];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
      this.customerService.getCustomersMedium().then((data) => (this.unlockedCustomers = data));

      this.lockedCustomers = [
          {
              id: 5135,
              name: 'Geraldine Bisset',
              country: {
                  name: 'France',
                  code: 'fr'
              },
              company: 'Bisset Group',
              status: 'proposal',
              date: '2019-05-05',
              activity: 0,
              representative: {
                  name: 'Amy Elsner',
                  image: 'amyelsner.png'
              }
          }
      ];
  }

  toggleLock(data: Customer, frozen: boolean, index: number) {
      if (frozen) {
          this.lockedCustomers = this.lockedCustomers.filter((c, i) => i !== index);
          this.unlockedCustomers.push(data);
      } else {
          this.unlockedCustomers = this.unlockedCustomers.filter((c, i) => i !== index);
          this.lockedCustomers.push(data);
      }

      this.unlockedCustomers.sort((val1:any, val2:any) => {
          return val1.id < val2.id ? -1 : 1;
      });
  }
}
