import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee [] = [
    {
      id: 1,
      name: 'Rattanachai',
      gender: 'Male',
      contactPreference: 'Email',
      phoneNumber: parseInt('0760941086'),
      email: 'duk151@hotmail.com',
      dateOfBirth: new Date('04/05/1996'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/rattanachai.png'
    },
    {
      id: 2,
      name: 'Jennifer',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 2345978640,
      dateOfBirth: new Date('11/20/1979'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/jennifer.png'
    },
    {
      id: 3,
      name: 'Max',
      gender: 'Male',
      contactPreference: 'Phone',
      phoneNumber: 5432978640,
      dateOfBirth: new Date('3/25/1976'),
      department: 'IT',
      isActive: false,
      photoPath: 'assets/images/max.png'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
