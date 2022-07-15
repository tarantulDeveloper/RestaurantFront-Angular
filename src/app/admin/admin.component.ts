import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { EmployeeService } from 'app/services/employee.service';
import { AuthServiceService } from 'app/services/auth-service.service';
import { Router } from '@angular/router';
import { NavbarComponent } from 'app/navbar/navbar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  employees: Observable<ApiResponse> | any
  username: string

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
    this.username = this.authService.getUserName();
  }

  updateEmployee(userName: string) {
    this.router.navigate(['/update',userName])
  }

  deleteEmployee(userName: string) {
    this.employeeService.deleteEmployee(userName).subscribe(
      (resp) => {
        location.reload();
      },
      (err) => {
        console.log(err);
        
      }
    )
    
  }

  refresh() {
    location.reload();
  }

  
}
