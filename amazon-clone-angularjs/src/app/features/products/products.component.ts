import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  categories = [
    { name: 'Electronics', image: 'assets/categories/electronics.jpg' },
    { name: 'Fashion', image: 'assets/categories/fashion.jpg' },
    // ...
  ];
  
  featuredProducts = [
    { id: 1, name: 'Smartphone', price: 15999, image: 'assets/products/phone.jpg' },
    // ...
  ];
  
  deals = [
    { title: 'Bluetooth Headphones', price: 1299, image: 'assets/deals/headphones.jpg' },
    // ...
  ];

}
