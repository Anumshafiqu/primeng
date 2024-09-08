import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrl: './size.component.css'
})
export class SizeComponent {
  products!: Product[];

  sizes!: any[];

  selectedSize: any = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });

      this.sizes = [
          { name: 'Small', class: 'p-datatable-sm' },
          { name: 'Normal', class: '' },
          { name: 'Large',  class: 'p-datatable-lg' }
      ];
  } 
}
