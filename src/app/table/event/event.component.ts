import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';
import { NgModule } from '@angular/core';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {
  products!: Product[];

  selectedProduct!: Product;

  constructor(private messageService: MessageService) {}

  // ngOnInit() {
  //     this.productService.getProductsMini().then((data) => {
  //         this.products = data;
  //     });
  // }

  onRowSelect(event: any) {
      this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.name });
  }

  onRowUnselect(event: any) {
      this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
  }
}
