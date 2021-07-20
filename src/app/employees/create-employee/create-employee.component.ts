import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


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
  department: string = '';
  dateOfBirth: string = '';
  datePickerConfiq: Partial<BsDatepickerConfig>


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

  saveEmployee(empForm: NgForm): void {
    console.log(empForm.value);
  }
}
