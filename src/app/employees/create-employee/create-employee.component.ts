import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
   employee: Employee = {
    id:  null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: null,
    photoPath: null
  }

  departments: Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'},
    
  ];

  datePickerConfiq: Partial<BsDatepickerConfig>
  previewPhoto = false;

  constructor() {
    this.datePickerConfiq = Object.assign({}, { 
      containerClass: 'theme-dark-blue', 
      showWeekNumbers: false,
      minDate: new Date(1921, 0, 1), 
      dateInputFormat: 'YYYY-MM-DD'

    })
   }

  ngOnInit(): void {
  }

  saveEmployee(employee: Employee): void {
    console.log(employee);
  }

  togglePhotoPreview() {
     this.previewPhoto = !this.previewPhoto;
  }
}
