import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items= [];
  addToCart(product){
    this.items.push(product);
    this.printCart()
  }
  getItems(){
    return this.items;
  }
  clearCart(){
    this.items = [];
    return this.items;
  }
  printCart(){
    console.log(this.items);
  }
  connectTestApi(){
     console.log(this.httpClient.get('https://gorest.co.in/public-api/users'));
  }
  getShippingPrices(){
    this.connectTestApi();
    return this.httpClient.get('/assets/shipping.json');
  }
  constructor(private httpClient: HttpClient) { }

}