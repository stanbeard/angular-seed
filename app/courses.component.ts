import { Component } from 'angular2/core'
import { CourseService } from './course.service'
import { AutoGrowDirective } from './auto-grow.directive'
@Component({
    selector: 'courses',
    template: `
        <h2>Courses</h2>
        {{ title }}
        <input 
            [style.backgroundColor]="red ? 'red' : 'blue'" 
            type="text"
            [value]="title"
            (input)="title = $event.target.value"
            autoGrow />
        <input type="text" [(ngModel)]="title" />
        <i 
            class="glyphicon" 
            [class.glyphicon-star]="red"
            [class.glyphicon-star-empty]="!red"
            (click)="onClick($event)"
        ></i>
        <button (click)="onClick()">Toggle</button>
        <ul>
            <li *ngFor="#course of courses">
                {{ course }}
            </li>
        </ul>
        `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
    title = "The title of the courses page.";
    courses;

    red: Boolean = false;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }

    onClick($event) {
        this.red = !this.red;
    }
}