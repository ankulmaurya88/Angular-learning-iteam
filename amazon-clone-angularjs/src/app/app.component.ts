import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductsComponent } from './features/products/products.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent,RouterLink,ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazon-clone-angularjs';
}
