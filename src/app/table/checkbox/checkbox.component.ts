import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})
export class CheckboxComponent {
  products!: Product[];

  selectedProducts!: Product;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }
}
