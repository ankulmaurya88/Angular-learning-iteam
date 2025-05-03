import { CommonModule, JsonPipe } from '@angular/common';

import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,FormsModule,CommonModule,ReactiveFormsModule,JsonPipe],
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
  
  // ---Api

  userlist:  any [] = [];
  constructor(private http: HttpClient) {}

  getAlluser(){
      this.http.get("http://127.0.0.1:8000/api/students/").subscribe((result:any)=> this.userlist=result)
  }


  studentobj = {
    firstName: '',
    email: ''
  };
  formvalue : any ;

  onSubmit(form: any) {
    if (form.valid) {
      this.formvalue=this.studentobj;
    }
  }
  
  }

