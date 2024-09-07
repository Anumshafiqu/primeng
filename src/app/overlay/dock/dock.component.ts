import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrl: './dock.component.css',
  styles: [
    ` .dock-window {
        width: 100%;
        height: 450px;
        position: relative;
        background-image: url('https://primefaces.org/cdn/primeng/images/dock/window.jpg');
        background-repeat: no-repeat;
        background-size: cover;
    }

    .p-dock {
        z-index: 1000;
    }`
],

})
export class DockComponent {
  items: MenuItem[] | undefined;


    ngOnInit() {
      this.items = [
          {
              label: 'Personal',
              routerLink: 'personal'
          },
          {
              label: 'Seat',
              routerLink: 'seat'
          },
          {
              label: 'Payment',
              routerLink: 'payment'
          },
          {
              label: 'Confirmation',
              routerLink: 'confirmation'
          }
      ];
  }
}
  

