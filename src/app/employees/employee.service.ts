import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class EmployeeService {
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

  getEmployees(): Observable<Employee[]> {
    return Observable.of(this.listEmployees).delay(1000);
  }
  getEmployeesById(id: number): Employee {
    return this.listEmployees.find((e) => e.id === id);
  }

  save(employee: Employee) {
    if (employee.id === null) {
      const maxId = this.listEmployees.reduce(function (e1, e2) {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      employee.id = maxId + 1;
      this.listEmployees.push(employee);
    } else {
      const foundIndex = this.listEmployees.findIndex(
        (e) => e.id === employee.id
      );
      this.listEmployees[foundIndex] = employee;
    }
  }
}
