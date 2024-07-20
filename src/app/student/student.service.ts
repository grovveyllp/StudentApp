import { Injectable } from '@angular/core';
import { IStudent } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students = [
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

  getStudents(): IStudent[] {
    return this.students;
  }
}
