import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IStudent } from './student.model';
import { NgFor } from '@angular/common';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentService } from './student.service';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [NgFor, StudentDetailComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent implements OnInit, AfterViewInit, OnDestroy {
  students: IStudent[] | undefined;
  selectedStudent?: IStudent;

  constructor(private readonly studentService: StudentService) {
    console.log('Contr... calling');
    this.students = studentService.getStudents();
  }

  ngOnDestroy(): void {
    console.log('distroy called');
  }

  ngAfterViewInit(): void {
    console.log('after init called');
  }

  ngOnInit(): void {
    console.log('init called');
  }

  selectStudent(student: IStudent) {
    //console.log(student);
    this.selectedStudent = student;
  }
}
