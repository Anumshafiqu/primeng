import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';
import { MessageService, SelectItem } from 'primeng/api'; 


@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrl: './row.component.css'
})
export class RowComponent {
    products!: Product[];

    statuses!: SelectItem[];

    clonedProducts: { [s: string]: Product } = {};

    constructor(private productService: ProductService, private messageService: MessageService) {}

    ngOnInit() {
        this.productService.getProductsMini().then((data) => {
            this.products = data;
        });

        this.statuses = [
            { label: 'In Stock', value: 'INSTOCK' },
            { label: 'Low Stock', value: 'LOWSTOCK' },
            { label: 'Out of Stock', value: 'OUTOFSTOCK' }
        ];
    }

    onRowEditInit(product: Product) {
        this.clonedProducts[product.id as string] = { ...product };
    }

    onRowEditSave(product: Product) {
        if (product.price !==undefined) {
            delete this.clonedProducts[product.id as string];
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });
        } else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Price' });
        }
    }

    onRowEditCancel(product: Product, index: number) {
        this.products[index] = this.clonedProducts[product.id as string];
        delete this.clonedProducts[product.id as string];
    }


  getSeverity(status: string): "success" | "warning" | "danger" | undefined {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
        default:
            return undefined;  // Return a value when status doesn't match any case
    }
}
}
