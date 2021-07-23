import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeSerive } from '../employee.service';


@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee [];


  constructor(private _employeeService: EmployeeSerive) { }

  ngOnInit(): void {
    this.employees  = this._employeeService.getEmployees();
  }

}
