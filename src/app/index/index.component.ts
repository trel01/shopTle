import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{

  productList: any = []
  constructor(private productService:ProductService ){
    
  }
  ngOnInit(): void {
    this.gatProductList()
  }
  gatProductList(){
   this.productService.getProducts()
    .subscribe((products :any) => {
      this.productList  = products 
    })    
  }
}
