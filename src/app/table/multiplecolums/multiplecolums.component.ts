import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-multiplecolums',
  templateUrl: './multiplecolums.component.html',
  styleUrl: './multiplecolums.component.css'
})
export class MultiplecolumsComponent {
  products1 !: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products1 = data;
      });
  }
}
