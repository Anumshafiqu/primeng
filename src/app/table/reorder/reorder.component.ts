import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';
interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrl: './reorder.component.css'
})
export class ReorderComponent {
  products!: Product[];

  cols!: Column[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => (this.products = data));

      this.cols = [
          { field: 'code', header: 'Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];
  }
}
