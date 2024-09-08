import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { SortEvent } from 'primeng/api';
import { ProductService } from '../../service/product.service';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-removeable',
  templateUrl: './removeable.component.html',
  styleUrl: './removeable.component.css'
})
export class RemoveableComponent {
 
}
