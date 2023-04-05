import { Product } from 'src/app/models/product.model';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[id:number]:number} ={1: 400, 2:335, 4:350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {
cols= 3;
rowHeight = ROWS_HEIGHT [this.cols];
category:string | undefined;
  constructor(private CartService: CartService) { }

  ngOnInit(): void {
  }
  onColumnsCountChange(colsNumber:number): void{
this.cols= colsNumber;
  }
  onShowCategory(newCategory:string):void {
this.category = newCategory;
  }
  onAddToCart(product:Product):void{
this.CartService.addToCart({
  product: product.image,
  name: product.title,
  price: product.price,
  quantity: 1,
  id: product.id
  });
 }
}
