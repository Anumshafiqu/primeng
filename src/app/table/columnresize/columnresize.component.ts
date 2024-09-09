import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-columnresize',
  templateUrl: './columnresize.component.html',
  styleUrl: './columnresize.component.css'
})
export class ColumnresizeComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }
}
