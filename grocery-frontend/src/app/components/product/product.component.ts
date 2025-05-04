
import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
 // Adjust path as needed
 import { HttpClient, } from '@angular/common/http';


@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.product_load();
  }
  product_load(): void {
    this.http.get('http://127.0.0.1:8000/groceryms/products/').subscribe({
      next: (response: any) => {
        this.products = response;
      },
      error: () => {
        alert("Failed to fetch products.");
      }
    });
}
  
}
