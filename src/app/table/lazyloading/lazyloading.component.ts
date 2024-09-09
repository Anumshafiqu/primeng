import { Component } from '@angular/core';
import { CarService } from '../../service/car.service';
import { Car } from '../../domain/car';
import { LazyLoadEvent } from 'primeng/api';
interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-lazyloading',
  templateUrl: './lazyloading.component.html',
  styleUrl: './lazyloading.component.css'
})
export class LazyloadingComponent {

}
