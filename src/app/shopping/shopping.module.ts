import { AuthGuardService } from './../shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CheckOutComponent } from './components/check-out/check-out.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductsComponent } from './components/products/products.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path : 'products' ,component : ProductsComponent },
      {path : 'shopping-cart' ,component : ShoppingCartComponent },
      {path : 'check-out' ,component : CheckOutComponent ,canActivate:[AuthGuardService]},
      {path : 'order-success/:id' ,component : OrderSuccessComponent,canActivate:[AuthGuardService] },
      {path : 'my/orders' ,component : MyOrdersComponent,canActivate:[AuthGuardService] },
    ])
  ],
  declarations: [
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    OrderSummaryComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule { }
