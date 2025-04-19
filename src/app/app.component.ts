import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web_2';
  // username = 'John Doe';
  username1 = '';
  username7=''
  name=''
  showMessage = true;
  username = ''; 
  userRole = 'guest';
  age: number = 20;
  fruits = ['Apple', 'Banana', 'Mango', 'Orange'];
  
  sayHello() {
    alert('Hello!');
    
  }
  

  submit() {
    console.log('Submitted! Username is:', this.username);
    alert(`Hello, ${this.username}!`);
    
  }
  
  

  toggle() {
    this.showMessage = !this.showMessage;
  }
  
  
  }

