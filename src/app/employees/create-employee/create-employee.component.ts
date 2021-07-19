import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'},
    
  ];
  fullName : string = '';
  email : string = '';
  gender: string = '';
  phoneNumber: number;
  contactPreference: string = '';
  isActive: boolean
  department: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
