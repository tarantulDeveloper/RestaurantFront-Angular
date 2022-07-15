import { Component, OnInit } from '@angular/core';
import { Employee } from 'app/model/employee.model';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'app/services/employee.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlreadyExistsComponent } from 'app/already-exists/already-exists.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  employee: Employee
  

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.employee = new Employee()
  }

  register(registerForm: NgForm) {
    this.employeeService.registerEmployee(registerForm.value).subscribe(
      (res) => {
        if(res){
          this.router.navigate(['/login'])
          registerForm.reset()
        } else {
          this.openDialog()
          
        }
      },
      (error) => {
        console.log(error);
        
      }
    )
  
    
  }

  openDialog() {
    this.dialog.open(AlreadyExistsComponent);
  }
    
}
