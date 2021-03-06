import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

import 'rxjs/add/observable/of';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class EmployeeDetailsGuardService implements CanActivate {
  constructor(
    private _employeeService: EmployeeService,
    private _router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this._employeeService
      .getEmployeesById(+route.paramMap.get('id'))
      .pipe(
        map((employee) => {
          const employeeExists = !!employee;

          if (employeeExists) {
            return true;
          } else {
            this._router.navigate(['notfound']);
            return false;
          }
        }),
        catchError((err) => {
          console.log(err);
          return Observable.of(false);
        })
      );
  }
}
