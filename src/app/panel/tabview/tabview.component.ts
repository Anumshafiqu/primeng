import { Component } from '@angular/core';

@Component({
  selector: 'app-tabview',
  templateUrl: './tabview.component.html',
  styleUrl: './tabview.component.css'
})
export class TabviewComponent {
  tabs: { title: string, content: string }[] = [];

  ngOnInit() {
      this.tabs = [
          { title: 'Tab 1', content: 'Tab 1 Content' },
          { title: 'Tab 2', content: 'Tab 2 Content' },
          { title: 'Tab 3', content: 'Tab 3 Content' }
      ];
  }


}
