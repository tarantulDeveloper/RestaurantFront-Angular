import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'app/loader/loader.service';
import { AuthServiceService } from 'app/services/auth-service.service';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string

  constructor(
    public router: Router,
    private authService: AuthServiceService,
    public employeeService: EmployeeService,
    public loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
  }

  tasks(userName: string) {
    this.router.navigate(['/user',userName])
    
  }

  room(userName: string){ 
    this.router.navigate(['/user-data',userName])
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.clear()
    this.router.navigate(['/home'])
  }

  


}
