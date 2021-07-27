import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css'],
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  selectedEmployeeId: number;
  @Input() searchTerm: string;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  viewEmployee() {
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { searchTerm: this.searchTerm },
    });
  }

  editEmployee() {
    this._router.navigate(['/edit', this.employee.id]);
  }
}
