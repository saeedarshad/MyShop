import { AuthGuardService } from './../shared/services/auth-guard.service';
import { RouterModule } from '@angular/router';
import { DataTableModule } from 'angular5-data-table';
import { SharedModule } from './../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminAuthGuardService as AdminAuthGuard} from './services/admin-auth-guard.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path : 'admin/products/new' ,
        component : ProductFormComponent ,
        canActivate:[AuthGuardService , AdminAuthGuard]
      },
      {
        path : 'admin/products/:id' ,
        component : ProductFormComponent ,
        canActivate:[AuthGuardService , AdminAuthGuard]
      }, 
      {
        path : 'admin/products' ,
        component : AdminProductsComponent ,
        canActivate:[AuthGuardService , AdminAuthGuard]
      },
      {
        path : 'admin/orders' ,
        component : AdminOrdersComponent ,
        canActivate:[AuthGuardService , AdminAuthGuard]},

    ])
  ],
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent
  ],
  providers:[
    AdminAuthGuard
  ],
})
export class AdminModule { }
