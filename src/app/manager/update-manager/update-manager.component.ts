import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';
import { Employee } from 'app/model/employee.model';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {

  userName: string
  employee: Employee
  apiResponse: ApiResponse

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
    }, error => console.log(error)
    )
  }

  onSubmit() {
  
    this.employeeService.updateEmployee(this.userName,this.employee).subscribe()
    this.employee = new Employee()
    
    this.router.navigate(['/manager']).then(() => {
      window.location.reload()
    })

  }
  

}
