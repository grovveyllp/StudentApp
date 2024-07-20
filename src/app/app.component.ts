import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from "./student/student.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, HomeComponent, StudentComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'SchoolApp';
  todayDate: Date = new Date();
}
