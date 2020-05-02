import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
 items;
 checkOutForm;
 constructor(
   private cartService: CartService,
   private formBuilder: FormBuilder
 ){
   this.checkOutForm = this.formBuilder.group({
     name: '',
     address: ''
   })
 }
 ngOnInit(){
   this.items = this.cartService.getItems(); 
 } 

 onSubmit( customerData ){
   this.cartService.clearCart();
   this.checkOutForm.reset();

   console.warn("Your order has been submitted", customerData)

 }
}