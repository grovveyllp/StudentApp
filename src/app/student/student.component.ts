import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { IStudent } from './student.model';
import { NgFor } from '@angular/common';
import { StudentDetailComponent } from './student-detail/student-detail.component';

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

  constructor() {
    console.log('Contr... calling');
    this.students = [
      {
        id: 20,
        firstName: 'Ram',
        lastName: 'Kumar',
        enrollmentId: 'A001',
        address: {
          id: 1,
          streetAddress1: 'H002-1 ABC Socitity',
          zipCode: '278212',
          country: 'IN',
        },
      },
      {
        id: 21,
        firstName: 'Shyam',
        lastName: 'Kumar',
        enrollmentId: 'A002',
        address: {
          id: 2,
          streetAddress1: 'H002-1 ABC Socitity',
          zipCode: '278212',
          country: 'IN',
        },
      },
      {
        id: 22,
        firstName: 'Mohan',
        lastName: 'Kumar',
        enrollmentId: 'A003',
        address: {
          id: 3,
          streetAddress1: 'H002-1 ABC Socitity',
          zipCode: '278212',
          country: 'IN',
        },
      },
    ];
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
