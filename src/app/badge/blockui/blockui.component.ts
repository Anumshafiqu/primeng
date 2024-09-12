import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-blockui',
  templateUrl: './blockui.component.html',
  styleUrl: './blockui.component.css'
})
export class BlockuiComponent {
  blockedPanel: boolean = false;
  blockedDocument: boolean = false;

  constructor(private cd: ChangeDetectorRef) {}

  blockDocument() {
      this.blockedDocument = true;
      setTimeout(() => {
          this.blockedDocument = false;
          this.cd.markForCheck();
      }, 3000);
  }
}
