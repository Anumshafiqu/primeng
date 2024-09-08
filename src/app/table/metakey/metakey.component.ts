import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-metakey',
  templateUrl: './metakey.component.html',
  styleUrl: './metakey.component.css'
})
export class MetakeyComponent {
  selectedProducts!: Product;
  products!: Product[];

  selectedProduct!: Product;

  metaKey: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  } 
}
