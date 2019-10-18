import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  products = [];
  // idproduct = 0;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.products = [];
    const observable = this._httpService.getAll();
    observable.subscribe(data => {
      console.log('Data retrived');
      for (const product of data[Symbol.iterator]()) {
        // this.idproduct += 1;
        // product.productid = this.idproduct;
        this.products.push(product);

      }
      console.log(this.products);
    });
  }
}