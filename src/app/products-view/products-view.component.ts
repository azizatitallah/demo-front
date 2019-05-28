import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  stock: number;
  comment: string;
}


@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'stock', 'comment'];
  dataSource = new Array<Product>();

  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit() {
    this.productService.getProducts().subscribe( (response) => {
      console.log(response);
      this.dataSource = response as Array<Product>;
    });
  }

}
