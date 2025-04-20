import { Component } from '@angular/core';

@Component({
  selector: 'app-enrollments',
  imports: [],
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.css'
})
export class EnrollmentsComponent {
  enrollments = [
    { student: 'Alice Johnson', course: 'Mathematics', date: '2025-04-01' },
    { student: 'Bob Smith', course: 'Physics', date: '2025-04-02' },
    { student: 'Charlie Davis', course: 'Computer Science', date: '2025-04-03' }
  ];
  

}
