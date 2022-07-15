import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';
import { AuthServiceService } from 'app/services/auth-service.service';
import { EmployeeService } from 'app/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  employee: Observable<ApiResponse> | any
  userName: string
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    console.log(this.userName);
    
    this.employeeService.getEmployeeByUserName(this.userName).subscribe(
      (res) => {
        this.employee = res;
        
      }
    );
    
    
  }

}
