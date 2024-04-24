import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'] // แก้ styleUrl เป็น styleUrls
})
export class CardComponent implements OnInit {
  @Input() products: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    // console.log("🚀 ~ ProductService ~ getProductById ~ caed:", this.products)

  }
  getProductById(product_id: number) {
    if (product_id !== undefined) {
      this.router.navigate(['/product', product_id])
    } else {
      console.error('Product ID is undefined');
    }
  }


  showAllproduct() {
    this.products = this.productService.getProducts();
    // console.log("🚀 ~ ProductService ~ getProductById ~ product:", this.products)
    this.productService.getProducts().subscribe((products: any[]) => {
      this.products = products;
    })

  }

  filterBy(type: string) {
    if (type == 'Dish' || type == 'Dessert' || type == 'Vegetable' || type == 'Fruit') {
      this.productService.getProducts().subscribe((products: any[]) => {
        this.products = products.filter((x:{type :{ type_name: string};}) => x.type.type_name === type)
    });
  }
}

  
}

