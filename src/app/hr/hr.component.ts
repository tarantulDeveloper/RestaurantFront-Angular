import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';
import { AuthServiceService } from 'app/services/auth-service.service';
import { EmployeeService } from 'app/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

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
    this.router.navigate(['/update-hr',userName])
  }

  deleteEmployee(userName: string) {
    this.employeeService.deleteEmployee(userName).subscribe(
      (resp) => {
        this.employees = this.employeeService.getEmployees()
      },
      (err) => {
        console.log(err);
        
      }
    )
    
  }

  refresh() {
    this.employees = this.employeeService.getEmployees();
  }

}
