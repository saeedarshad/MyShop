import { OrderService } from 'shared/services/order.service';
import { AuthService } from 'shared/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Order } from 'shared/models/order';
import { ShoppingCart } from 'shared/models/shopping-cart';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css']
})
export class ShippingFormComponent implements OnInit,OnDestroy  {
  @Input('cart') cart : ShoppingCart;
  shipping :any= [];
  userSubscription : Subscription;
  userId : string;
  
  constructor(private orderService : OrderService , 
    private authService : AuthService,
    private router :Router) { }

  async placeOrder() {
    let order = new Order( this.userId,this.shipping,this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success' ,result.key]);
  }

  ngOnInit() {
    this.userSubscription = this.authService.user$.subscribe(user =>this.userId =user.uid)
  }

  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
