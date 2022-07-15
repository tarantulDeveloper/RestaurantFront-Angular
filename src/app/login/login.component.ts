import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'app/services/auth-service.service';
import { EmployeeService } from 'app/services/employee.service';

import { MatDialog } from '@angular/material/dialog';
import { WrongCredentialsComponent } from 'app/wrong-credentials/wrong-credentials.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string

  constructor(private employeeService: EmployeeService,
              private authService: AuthServiceService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  login(loginForm:NgForm){
    this.employeeService.login(loginForm.value).subscribe(
      (response: any)=>{
        this.userName = response.employee.userName
        this.authService.setRoles(response.employee.role);
        this.authService.setToken(response.jwtToken);
        this.authService.setUserName(response.employee.userName);

        const role = response.employee.role;
        if(role == 'ADMIN') {
          this.router.navigate(['/admin']);
        } else if (role == 'MANAGER') {
          this.router.navigate(['/manager']);
        } else if (role == 'HR') {
          this.router.navigate(['/hr'])
        } else if (role == 'WORKER') {
          this.router.navigate(['/user',this.userName])
        } else if (role === 'MARKETOLOG') {
          this.router.navigate(['/marketolog'])
        } else if (role === 'USER'){
          this.router.navigate(['default-user'])

        }
      },
      (error) => {
        this.openDialog()
        
      }
    );
    
    
  }

  openDialog(){
    let dialogRef = this.dialog.open(WrongCredentialsComponent,
      {
        width: "550px",
        height: "200px",
        panelClass: 'registerDialog'
      });
    dialogRef.afterClosed().subscribe()
  }

}
