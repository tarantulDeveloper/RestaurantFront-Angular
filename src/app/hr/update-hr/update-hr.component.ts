import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';
import { Employee } from 'app/model/employee.model';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-update-hr',
  templateUrl: './update-hr.component.html',
  styleUrls: ['./update-hr.component.css']
})
export class UpdateHrComponent implements OnInit {

  userName: string
  employee: Employee
  apiResponse: ApiResponse
  Roles: string[] = ['ADMIN','USER','MANAGER','HR','WORKER']
  selectedRole: any

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.userName = this.route.snapshot.params['userName']
    this.employeeService.getEmployeeByUserName(this.userName).subscribe(data => {
      this.employee = data;
      this.selectedRole = this.employee.role;
    }, error => console.log(error)
    )
  }

  radioChange(event: any){
    this.selectedRole = event.target.value;
  }

  onSubmit() {
    this.employee.role = this.selectedRole
    this.employeeService.updateEmployee(this.userName,this.employee).subscribe()
    this.employee = new Employee()
    
    this.router.navigate(['/hr']).then(() => {
      window.location.reload()
    })

  }
}
