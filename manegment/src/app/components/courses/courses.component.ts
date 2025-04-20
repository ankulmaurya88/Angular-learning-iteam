import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { name: 'Mathematics', description: 'Basic and advanced math topics.' },
    { name: 'Physics', description: 'Mechanics, thermodynamics, and waves.' },
    { name: 'Computer Science', description: 'Data structures and algorithms.' }
  ];
}
