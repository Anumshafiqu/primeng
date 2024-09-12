import { Component } from '@angular/core';

@Component({
  selector: 'app-focustrap',
  templateUrl: './focustrap.component.html',
  styleUrl: './focustrap.component.css'
})
export class FocustrapComponent {
  selectedCity: string | undefined;

  cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
}
