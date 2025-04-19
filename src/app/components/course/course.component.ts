import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course',
  imports: [CommonModule,FormsModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
   // For *ngIf
   isVisible = true;

   // For *ngFor
   courses = ['Angular', 'React', 'Vue'];
 
   // For *ngSwitch
   selectedLevel = 'beginner';
 
   toggleVisibility() {
     this.isVisible = !this.isVisible;
   }

}

// this is my api runing 
// http://127.0.0.1:8000/api/teachers/
