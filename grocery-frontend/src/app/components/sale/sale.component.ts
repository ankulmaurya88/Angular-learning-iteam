import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './services/api-service.service';
  // Adjust path if needed

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'] // ✅ use `styleUrls` (plural)
})
export class SaleComponent implements OnInit {
  sales: any[] = [];
  newSale: any = {};

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.loadSales();
  }

  loadSales(): void {
    this.apiService.get('/groceryms/sales/').subscribe({
      next: (response: any) => {
        this.sales = response;
      },
      error: () => {
        alert("Failed to fetch sales.");
      }
    });
  }

  addSale(): void {
    this.apiService.post('/groceryms/sales/', this.newSale).subscribe({
      next: (response: any) => {
        this.sales.push(response);
        this.newSale = {};
      },
      error: () => {
        alert("Failed to add sale.");
      }
    });
  }
}
