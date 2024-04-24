// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   constructor() { }
//   private products = [
//     {
//       productId: 1,
//       Nameproduct: "Cupcakes",
//       type:"Dessert",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$150.00",
//       imgurl: 'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       productId: 2,
//       Nameproduct: "Fish salad",
//       type:"Dish",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$200.00",
//       imgurl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       productId: 3,
//       Nameproduct: "Pizza",
//       type:"Dish",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$199.00",
//       imgurl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dttps://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       productId: 4,
//       Nameproduct: "Noodles",
//       type:"Dish",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$70.00",
//       imgurl: 'https://images.unsplash.com/photo-1706128998697-456f55fb409d?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       productId: 5,
//       Nameproduct: "stir-fried pork",
//       type:"Dish",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$100.00",
//       imgurl: 'https://plus.unsplash.com/premium_photo-1669150849080-241bf2ec9b4a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       productId: 6,
//       Nameproduct: "Stir-fried",
//       type:"Dish",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$150.00",
//       imgurl: 'https://images.unsplash.com/photo-1703849062114-1b08bb62b150?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       productId: 6,
//       Nameproduct: "Broccoli",
//       type:"Vegetable",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$150.00",
//       imgurl: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=1802&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1703849062114-1b08bb62b150?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       productId: 6,
//       Nameproduct: "Bell Peppre",
//       type:"Vegetable",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$150.00",
//       imgurl: 'https://images.unsplash.com/photo-1573067485648-4cb2618b5e09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1703849062114-1b08bb62b150?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     {
//       productId: 6,
//       Nameproduct: "StrawBerry",
//       type:"Fruit",
//       productDetails: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
//       price: "$150.00",
//       imgurl: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1573067485648-4cb2618b5e09?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1703849062114-1b08bb62b150?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//   ];


//   getProducys() {
//     return of(this.products);
//   }

//   getProductById(productId: number) {
//     const product = this.products.find(x => x.productId === productId)
//     // console.log("🚀 ~ ProductService ~ getProductById ~ product:", products)
//     return of(product)
//   }

// }





