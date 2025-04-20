import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  students = [
    { name: 'Alice Johnson', rollNo: '101', email: 'alice@example.com' },
    { name: 'Bob Smith', rollNo: '102', email: 'bob@example.com' },
    { name: 'Charlie Davis', rollNo: '103', email: 'charlie@example.com' }
  ];

  
  selectedStudent: any = null;
  isshow(students: any) {
    this.selectedStudent = students ;
  }
}
