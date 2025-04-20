import { Component } from '@angular/core';

@Component({
  selector: 'app-teachers',
  imports: [],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {

  teachers = [
    { name: 'Mr. John Smith', subject: 'Mathematics', email: 'john.smith@example.com' },
    { name: 'Ms. Emily Davis', subject: 'Physics', email: 'emily.davis@example.com' },
    { name: 'Dr. Alex Lee', subject: 'Computer Science', email: 'alex.lee@example.com' }
  ];
  

}
