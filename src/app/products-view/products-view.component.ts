import { ProductsService } from './../services/products.service';
import { Component, OnInit, AfterContentChecked } from '@angular/core';

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
export class ProductsViewComponent implements AfterContentChecked {

  displayedColumns: string[] = ['id', 'name', 'stock', 'comment'];
  dataSource = new Array<Product>();
  productID = 1;

  constructor(
    private productService: ProductsService,
  ) { }

  ngAfterContentChecked() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductByID(this.productID).subscribe( (response) => {
      console.log(response);
      this.dataSource = response as Array<Product>;
    });
  }
}
