import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';

import { EmployeeService } from 'app/services/employee.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

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
    this.employeeService.getWorksOfEmployee(this.userName).subscribe(
      data => {this.employeeFirstName = data[0].employee.firstName,
              this.employeeLastName = data[0].employee.lastName,
              this.userName = data[0].employee.userName;
            console.log(data);
            },
      (error) => {
        this.isEmpty = true
      }
      
    )
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

  addWork(taskForm: NgForm, userName: string) {
    this.employeeService.addWork(userName,taskForm.value.task).subscribe(
      (res) => {
        taskForm.reset()
        location.reload()
      },
      (err) => {
        console.log(err);
        
      }
    );
    
    
    
    
  }

}
