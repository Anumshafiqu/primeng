import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-columntoggle',
  templateUrl: './columntoggle.component.html',
  styleUrl: './columntoggle.component.css'
})
export class ColumntoggleComponent {
  products !: Product[];

  cols !: Column[];

  _selectedColumns !: Column[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });

      this.cols = [
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];

      this._selectedColumns = this.cols;
  }

  get selectedColumns(): Column[] {
      return this._selectedColumns;
  }

  set selectedColumns(val: Column[]) {
      //restore original order
      this._selectedColumns = this.cols.filter((col) => val.includes(col));
  }
}
