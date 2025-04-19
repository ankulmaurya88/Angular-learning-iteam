import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-grades',
  imports: [RouterLink],
  templateUrl: './grades.component.html',
  styleUrl: './grades.component.css'
})
export class GradesComponent {

  
  sayHello() {
    alert('Hello!');
    // or console.log('Hello!');
  }

}
