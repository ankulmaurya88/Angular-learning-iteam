// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { SaleComponent } from './components/sale/sale.component';

export const routes: Routes = [
  {
    path: 'categories',
    component: CategoryComponent
  },
  {
    path: 'products',
    component: ProductComponent
  },
  {
    path: 'sales',
    component: SaleComponent
  },
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  }
];

