import { Component } from '@angular/core';


@Component({
  selector: 'app-overlaypanel',
  templateUrl: './overlaypanel.component.html',
  styleUrl: './overlaypanel.component.css'
})
export class OverlaypanelComponent {
  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'amyelsner.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'amyelsner.png', email: 'ioni@email.com', role: 'Viewer' }
];


}
