import { Component,ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';



@Component({
  selector: 'app-contextmenu',
  templateUrl: './contextmenu.component.html',
  styleUrl: './contextmenu.component.css'
})
export class ContextmenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Copy', icon: 'pi pi-copy' },
          { label: 'Rename', icon: 'pi pi-file-edit' }
      ];
  }


}
