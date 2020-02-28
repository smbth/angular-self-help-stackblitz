import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  // form model
  checkOutForm;
  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { 
    this.checkOutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  onSubmit(customerData){
    this.cartItems = this.cartService.clearCart();
    this.checkOutForm.reset();
    window.alert("Order placed! "+customerData.name);
  }
  ngOnInit() {
    this.cartItems = this.cartService.getItems();
  }

}