import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web_2';
  // username = 'John Doe';
  username1 = '';
  username7=''
  name=''
  sayHello() {
    alert('Hello!');
    // or console.log('Hello!');
  }

  
  }

