import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/product.service';
import { SortEvent } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-removeable',
  templateUrl: './removeable.component.html',
  styleUrl: './removeable.component.css'
})
export class RemoveableComponent {
  @ViewChild('dt') dt!: Table;

  product!: Product[];

  initialValue!: Product[];

  isSorted:any = null;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.product = data;
          this.initialValue = [...data];
      });
  }

  customSort(event: SortEvent) {
      if (this.isSorted == null || this.isSorted === undefined) {
          this.isSorted = true;
          this.sortTableData(event);
      } else if (this.isSorted == true) {
          this.isSorted = false;
          this.sortTableData(event);
      } else if (this.isSorted == false) {
          this.isSorted = null;
          this.product = [...this.initialValue];
          this.dt.reset();
      }
  }

  sortTableData(event:any) {
      event.data.sort((data1:any, data2:any) => {
          let value1 = data1[event.field];
          let value2 = data2[event.field];
          let result = null;
          if (value1 == null && value2 != null) result = -1;
          else if (value1 != null && value2 == null) result = 1;
          else if (value1 == null && value2 == null) result = 0;
          else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
          else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

          return event.order * result;
      });
  }
}
