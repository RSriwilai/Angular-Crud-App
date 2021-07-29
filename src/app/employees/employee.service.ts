import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Observable, throwError } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  private listEmployees: Employee[] = [
    // {
    //   id: 1,
    //   name: 'Rattanachai',
    //   gender: 'Male',
    //   contactPreference: 'Email',
    //   phoneNumber: parseInt('0760941086'),
    //   email: 'duk151@hotmail.com',
    //   dateOfBirth: new Date('04/05/1996'),
    //   department: '3',
    //   isActive: true,
    //   photoPath: 'assets/images/rattanachai.png',
    // },
    // {
    //   id: 2,
    //   name: 'Jennifer',
    //   gender: 'Female',
    //   contactPreference: 'Phone',
    //   phoneNumber: 2345978640,
    //   dateOfBirth: new Date('11/20/1979'),
    //   department: '2',
    //   isActive: true,
    //   photoPath: 'assets/images/jennifer.png',
    // },
    // {
    //   id: 3,
    //   name: 'Max',
    //   gender: 'Male',
    //   contactPreference: 'Phone',
    //   phoneNumber: 5432978640,
    //   dateOfBirth: new Date('3/25/1976'),
    //   department: '3',
    //   isActive: false,
    //   photoPath: 'assets/images/max.png',
    // },
  ];

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }

    return throwError(
      'There is a problem with the service. We are notified & working on it. Please try again later.'
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this._httpClient
      .get<Employee[]>('http://localhost:3000/employees')
      .pipe(catchError(this.handleError));
  }

  getEmployeesById(id: number): Employee {
    return this.listEmployees.find((e) => e.id === id);
    // return this._httpClient.get<Employee>(
    //   'http://localhost:3000/employees/' + id
    // );
  }

  // save(employee: Employee): Observable<Employee> {
  //   if (employee.id === null) {
  //     return this._httpClient
  //       .post<Employee>('http://localhost:3000/employees', employee, {
  //         headers: new HttpHeaders({
  //           'Content-Type': 'application/json',
  //         }),
  //       })
  //       .pipe(catchError(this.handleError));
  //   } else {
  //     const foundIndex = this.listEmployees.findIndex(
  //       (e) => e.id === employee.id
  //     );
  //     this.listEmployees[foundIndex] = employee;
  //   }
  // }
  save(employee: Employee): Observable<Employee> {
    if (employee.id === null) {
      return this._httpClient
        .post<Employee>('http://localhost:3000/employees', employee, {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        })
        .pipe(catchError(this.handleError));
    } else {
      const foundIndex = this.listEmployees.findIndex(
        (e) => e.id === employee.id
      );

      this.listEmployees[foundIndex] = employee;
    }
  }

  deleteEmployee(id: number) {
    const i = this.listEmployees.findIndex((e) => e.id === id);
    if (i !== -1) {
      this.listEmployees.splice(i, 1);
    }
  }
}
