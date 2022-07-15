import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';
import { EmployeeService } from 'app/services/employee.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  tasks: Observable<ApiResponse> | any
  userName: any
  employeeFirstName: string
  employeeLastName: string
  isEmpty = false
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['userName']
    
      
    this.tasks = this.employeeService.getWorksOfEmployee(this.userName);
    
    
    
  }
  deleteWork(identifier: number){
    this.employeeService.deleteWorkOfEmployee(identifier).subscribe(
      (res) => {
        location.reload()
      },
      (err) => {
        console.log(err);
        
      }
    )
  }

  
    
    
    
    


}
