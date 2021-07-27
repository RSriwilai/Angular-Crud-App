import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Injectable()
export class EmplyeeListResolverService implements Resolve<Employee[]> {
  constructor(private _employeeService: EmployeeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Employee[]> {
    return this._employeeService.getEmployees();
  }
}
