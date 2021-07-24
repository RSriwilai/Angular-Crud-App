import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeSerive } from '../employee.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  employeeToDisplay: Employee;
  private arrayIndex = 1;

  constructor(
    private _employeeService: EmployeeSerive,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee(): void {
    if (this.arrayIndex <= 2) {
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    } else {
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

  toEmployeeDetails(employeeId: number) {
    this._router.navigate(['/employees', employeeId]);
  }
}
