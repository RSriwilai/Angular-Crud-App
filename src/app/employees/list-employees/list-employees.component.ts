import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { ResolvedEmployeeList } from '../resolved-employeelist.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css'],
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  employeeToDisplay: Employee;
  private arrayIndex = 1;
  filteredEmployees: Employee[];
  private _searchTerm: string;
  error: string;

  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filtereEmployees(value);
  }

  constructor(private _router: Router, private _route: ActivatedRoute) {
    const resolvedData: Employee[] | string =
      this._route.snapshot.data['employeeList'];

    if (Array.isArray(resolvedData)) {
      this.employees = resolvedData;
    } else {
      this.error = resolvedData;
    }
    if (this._route.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.filteredEmployees = this.employees;
    }
  }

  ngOnInit(): void {}

  filtereEmployees(searchString: string) {
    return this.employees.filter(
      (e) => e.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
    );
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

  onDeleteNotification(id: number) {
    const i = this.filteredEmployees.findIndex((e) => e.id === id);
    if (i !== -1) {
      this.filteredEmployees.splice(i, 1);
    }
  }
}
