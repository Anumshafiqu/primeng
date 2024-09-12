import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';
import { CarService } from '../../service/car.service';

@Component({
  selector: 'app-inplace',
  templateUrl: './inplace.component.html',
  styleUrl: './inplace.component.css'
})
export class InplaceComponent {
  products:any ;

  constructor(private productService: ProductService,private carService: CarService) {}

  loadData() {
      this.productService.getProductsSmall().then((products) => (this.products = products));
  }
  cars: any;

  // constructor(private carService: CarService) {}

  ngOnInit() {
      this.carService.getCarsSmall().then((cars) => (this.cars = cars));
  }
}
