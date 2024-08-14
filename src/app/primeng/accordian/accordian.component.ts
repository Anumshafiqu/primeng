import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrl: './accordian.component.css'
})
export class AccordianComponent {
  tabs = [
    { title: 'Title 1', content: 'Content 1' },
    { title: 'Title 2', content: 'Content 2' },
    { title: 'Title 3', content: 'Content 3' }
];

activeIndex: number| undefined ;

activeIndexChange(index : number){
    this.activeIndex = index
}

}
