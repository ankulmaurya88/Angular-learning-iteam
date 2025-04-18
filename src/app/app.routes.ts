import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { ExtraactivityComponent } from './components/extraactivity/extraactivity.component';
import { FieldComponent } from './field/field.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GradesComponent } from './components/grades/grades.component';
import { AttendanceComponent } from './components/attendance/attendance.component';

export const routes: Routes = [

    {
        path : 'Student-name',
        component:StudentComponent
    },
    {
        path : 'course',
        component:CourseComponent
    },
    {
        path : 'extraactivity',
        component:ExtraactivityComponent
    },
    {
        path : 'field',
        component:FieldComponent
    },
    { path: 'profile', component: ProfileComponent },
    { path: 'attendance', component: AttendanceComponent },
    { path: 'grades', component: GradesComponent },
    { path: 'projects', component: ProjectsComponent },


];
