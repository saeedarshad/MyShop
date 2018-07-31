import { Product } from 'shared/models/product';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'shared/services/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart;

  constructor(private shoppingCartService: ShoppingCartService) { }

  async addToCart() {
    this.shoppingCartService.addToCart(this.product);
  }

  async removeFromCart(){
    this.shoppingCartService.removeFromCart(this.product);
  }

  ngOnInit() {
  }

}
