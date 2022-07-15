import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';
import { AuthServiceService } from 'app/services/auth-service.service';
import { EmployeeService } from 'app/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  employees: Observable<ApiResponse> | any
  username: string

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
    this.username = this.authService.getUserName();
    console.log(this.username);
    
  }

  updateEmployee(userName: string) {
    this.router.navigate(['/update-manager',userName])
  }

  taskOfWorker(userName: string){
    this.router.navigate(['task-employee',userName])
  }
  
  deleteEmployee(userName: string) {
    this.employeeService.deleteEmployee(userName).subscribe(
      (resp) => {
        location.reload()
      },
      (err) => {
        console.log(err);
        
      }
    )
    
  }

  refresh() {
    location.reload()
  }

}
