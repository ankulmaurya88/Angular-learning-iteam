import { Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { GradesComponent } from './components/grades/grades.component';
import { EnrollmentsComponent } from './components/enrollments/enrollments.component';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
    // {
    //     path:'footer',
    //     component:FooterComponent
    // },
    // {
    //     path: 'header',
    //     component:HeaderComponent
    // },

    {
        path :"STUDENTS",
        component:StudentsComponent
    },
    {
        path :"COURSE",
        component:CoursesComponent
    },
    {
        path :"ENROLLMENTS",
        component:EnrollmentsComponent
    },
    {
        path :"GRADES",
        component:GradesComponent
    },
    {
        path :"TEACHER",
        component:TeachersComponent
    },


];
