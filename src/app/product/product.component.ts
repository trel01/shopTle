import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Product } from '../models/product.models';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'] // แก้ styleUrl เป็น styleUrls
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const product_id = +params['product_id'];
      this.getProductDetails(product_id);
      console.log("🚀 ~ ProductService ~ getProductById ~ product:", product_id)

    });
  }

  getProductDetails(product_id: number) {
    this.productService.getProductById(product_id)
      .subscribe((product: Product) => {
        this.product = product;
      });
  }
}
