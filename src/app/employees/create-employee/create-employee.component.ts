import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;

  employee: Employee;
  panelTitle: string;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' },
    { id: 5, name: 'Admin' },
  ];

  datePickerConfiq: Partial<BsDatepickerConfig>;
  previewPhoto = false;

  constructor(
    private _employeeService: EmployeeService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.datePickerConfiq = Object.assign(
      {},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(1921, 0, 1),
        dateInputFormat: 'YYYY-MM-DD',
      }
    );
  }

  ngOnInit() {
    this._route.paramMap.subscribe((parameterMap) => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  saveEmployee(): void {
    if (this.employee.id == null) {
      this._employeeService.addEmployee(this.employee).subscribe(
        (data: Employee) => {
          console.log(data);
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    } else {
      this._employeeService.updateEmployee(this.employee).subscribe(
        () => {
          this.createEmployeeForm.reset();
          this._router.navigate(['list']);
        },
        (error: any) => console.log(error)
      );
    }
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,
      };
      this.panelTitle = 'Create Employee';
      // this.createEmployeeForm.reset();
    } else {
      this.panelTitle = 'Edit Employee';
      this._employeeService.getEmployeesById(id).subscribe(
        (employee) => (this.employee = employee),
        (err: any) => console.log(err)
      );
    }
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
