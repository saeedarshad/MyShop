import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from 'shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'shared/services/product.service';
import 'rxjs/add/operator/take'
import { Product } from 'shared/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product : Product;
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.getProduct(this.id).take(1).subscribe(product => this.product = product)
    }
  }

  save(product) {
    if (this.id) this.productService.updateProduct(this.id, product);
    else this.productService.createProduct(product);

    this.router.navigate(['/admin/products']);
  }

  delete(){
    if(confirm('Are you sure you want to delete this product')){
      this.productService.deleteProduct(this.id);
      this.router.navigate(['/admin/products']);
    }
  }



  ngOnInit() {
  }

}
