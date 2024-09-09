import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
// import { Product } from '../../domain/product';
import { MessageService } from 'primeng/api';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
interface Product {
  id?: string;
  name: string;
}
@Component({
  selector: 'app-rowexpansion',
  templateUrl: './rowexpansion.component.html',
  styleUrl: './rowexpansion.component.css'
})
export class RowexpansionComponent {

  
  
  products!: Product[];

  expandedRows = {};

  constructor(private productService: ProductService, private messageService: MessageService) {}

  ngOnInit() {
      this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
  }

  expandAll() {
      this.expandedRows = this.products.reduce((acc, p) => (acc = true) && acc, {});
  }

  collapseAll() {
      this.expandedRows = {};
  }
  getSeverity(status: string): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
    switch (status) {
        case 'PENDING':
            return 'warning';   // Must return a valid severity type
        case 'DELIVERED':
            return 'success';   // Must return a valid severity type
        case 'CANCELLED':
            return 'danger';    // Must return a valid severity type
        default:
            return 'info';      // Fallback for unspecified status
    }
}

getStatusSeverity(status: string): "success" | "secondary" | "info" | "warning" | "danger" | "contrast" | undefined {
  switch (status) {
      case 'PENDING':
          return 'warning';
      case 'DELIVERED':
          return 'success';
      case 'CANCELLED':
          return 'danger';
      default:
          return 'info';  // Ensure default case returns an allowed value
  }
}

  onRowExpand(event: TableRowExpandEvent) {
      this.messageService.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
      this.messageService.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
  }
}
