import { Component } from '@angular/core';
import { CarService } from '../../service/car.service';
import { Car } from '../../domain/car';


interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrl: './virtualscroll.component.css'
})
export class VirtualscrollComponent {
  cars!: Car[];

  virtualCars!: Car[];

  cols!: Column[];

  constructor(private carService: CarService) {}

  ngOnInit() {
      this.cols = [
          { field: 'id', header: 'Id' },
          { field: 'vin', header: 'Vin' },
          { field: 'year', header: 'Year' },
          { field: 'brand', header: 'Brand' },
          { field: 'color', header: 'Color' }
      ];

      this.cars = Array.from({ length: 10000 }).map((_, i) => this.carService.generateCar(i + 1));
      this.virtualCars = Array.from({ length: 10000 });
  }
}
