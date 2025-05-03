import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api-service.service';  // Adjust path as needed
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  newProduct: any = {};

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  // Load existing products from the API
  loadProducts(): void {
    this.apiService.get('/groceryms/products/').subscribe({
      next: (response: any) => {
        this.products = response;
      },
      error: (err) => {
        console.error(err);
        alert("Failed to fetch products.");
      }
    });
  }

  // Add a new product and refresh the list
  addProduct(): void {
    if (!this.newProduct || !this.newProduct.name) {
      alert("Please enter product details.");
      return;
    }

    this.apiService.post('/groceryms/products/', this.newProduct).subscribe({
      next: (response: any) => {
        this.products.push(response);
        this.newProduct = {}; // Reset form
      },
      error: (err) => {
        console.error(err);
        alert("Failed to add product.");
      }
    });
  }
}
