import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeSerive } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee;
  private _id: number;

  constructor(
    private _route: ActivatedRoute,
    private _employeeService: EmployeeSerive,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe((params) => {
      this._id = +params.get('id');
      this.employee = this._employeeService.getEmployeesById(this._id);
    });
  }
  viewNextEmployee() {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this._router.navigate(['/employees', this._id]);
  }
}
