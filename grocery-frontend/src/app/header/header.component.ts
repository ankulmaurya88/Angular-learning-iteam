import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-header',
  imports: [RouterOutlet,RouterLink,], // You only need to import router-related modules here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Correct plural 'styleUrls'
})
export class HeaderComponent {
}
