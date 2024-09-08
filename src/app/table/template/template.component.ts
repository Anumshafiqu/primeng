import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsMini().then((data) => {
          this.products = data;
      });
  }

  getSeverity(status: string): "success" | "warning" | "danger" | undefined {
    switch (status) {
      case "Success":
        return "success";
      case "Warning":
        return "warning";
      case "Danger":
        return "danger";
      default:
        return undefined; // Ensure all paths return a value
    }
  }
}
