import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrl: './style.component.css',
  styles: [
    `.outofstock {
        font-weight: 700;
        color: #ff5252;
        text-decoration: line-through;
    }

    .lowstock {
        font-weight: 700;
        color: #ffa726;
    }

    .instock {
        font-weight: 700;
        color: #66bb6a;
    }

    :host ::ng-deep .row-accessories {
        background-color: rgba(0, 0, 0, 0.15) !important;
    }`
],
})
export class StyleComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }
}
