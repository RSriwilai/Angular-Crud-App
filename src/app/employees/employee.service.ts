import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeeSerive {
  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Rattanachai',
      gender: 'Male',
      contactPreference: 'Email',
      phoneNumber: parseInt('0760941086'),
      email: 'duk151@hotmail.com',
      dateOfBirth: new Date('04/05/1996'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/rattanachai.png',
    },
    {
      id: 2,
      name: 'Jennifer',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/jennifer.png',
    },
    {
      id: 3,
      name: 'Max',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/max.png',
    },
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }
  getEmployeesById(id: number): Employee {
    return this.listEmployees.find((e) => e.id === id);
  }

  save(employee: Employee) {
    this.listEmployees.push(employee);
  }
}
