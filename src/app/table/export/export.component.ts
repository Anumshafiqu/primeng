import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrl: './export.component.css'
})
export class ExportComponent {
  products!: Product[];

  selectedProducts!: Product[];

  constructor(private productService: ProductService) {}

  cols!: Column[];

  exportColumns!: ExportColumn[];

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });

      this.cols = [
          { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
          { field: 'name', header: 'Name' },
          { field: 'category', header: 'Category' },
          { field: 'quantity', header: 'Quantity' }
      ];

      this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
}
