import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';  // Adjust path if needed

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'] // ✅ use `styleUrls` (plural)
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  newCategory: any = {};

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.apiService.get('/groceryms/categories/').subscribe({
      next: (response: any) => {
        this.categories = response;
      },
      error: () => {
        alert("Failed to fetch categories.");
      }
    });
  }

  addCategory(): void {
    this.apiService.post('/groceryms/categories/', this.newCategory).subscribe({
      next: (response: any) => {
        this.categories.push(response);
        this.newCategory = {};
      },
      error: () => {
        alert("Failed to add category.");
      }
    });
  }
}

