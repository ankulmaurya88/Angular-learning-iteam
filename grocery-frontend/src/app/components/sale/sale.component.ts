import { Component, OnInit } from '@angular/core';
// use correct relative path
import { CommonModule, JsonPipe } from '@angular/common';
  // Adjust path if needed
  import { HttpClient, } from '@angular/common/http';

@Component({
  selector: 'app-sale',
  imports: [CommonModule],
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'] // ✅ use `styleUrls` (plural)
})
export class SaleComponent implements OnInit {

  sale: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.product_load();
  }
  product_load(): void {
    this.http.get('http://127.0.0.1:8000/groceryms/sales/').subscribe({
      next: (response: any) => {
        this.sale= response.data;
      },
      error: () => {
        alert("Failed to fetch sales.");
      }
    });
  
    
  }
}

