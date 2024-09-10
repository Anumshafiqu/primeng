import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-filter-cell',
  templateUrl: './filter-cell.component.html',
  styleUrl: './filter-cell.component.css'
})
export class FilterCellComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }

  onEdit(event:any) {
      if (!this.isPositiveInteger(event.target.value)) {
          event.stopPropagation();
      }
  }

  isPositiveInteger(val:any) {
      let str = String(val);

      str = str.trim();

      if (!str) {
          return false;
      }

      str = str.replace(/^0+/, '') || '0';
      var n = Math.floor(Number(str));

      return n !== Infinity && String(n) === str && n >= 0;
  }
}
