import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthServiceService } from 'app/services/auth-service.service';
import { EmployeeService } from 'app/services/employee.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private employeeService: EmployeeService
  ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.getToken() !== null) {
      const role = route.data["roles"][0]
      
      
      if(role){
        const match = this.employeeService.roleMatch(role)
        if(match){
          return true
        } else {
          this.router.navigate(['/forbidden'])
          return false
        }
      }
    }
    this.router.navigate(['/login'])
    return false
  }
  
}
