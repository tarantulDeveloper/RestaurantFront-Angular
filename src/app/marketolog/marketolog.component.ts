import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarketExpenses } from 'app/model/marketExpenses.model';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-marketolog',
  templateUrl: './marketolog.component.html',
  styleUrls: ['./marketolog.component.css']
})
export class MarketologComponent implements OnInit {

  markerExpenses: MarketExpenses
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.markerExpenses = new MarketExpenses();
    this.employeeService.getExpensesById(1).subscribe(
      data => {
        this.markerExpenses = data
      },
      error => {console.log(error);
      }
    )
  }

  onSubmit() {
    
    console.log(this.markerExpenses)
    this.employeeService.updateExpenses(this.markerExpenses).subscribe()
    
   

  }

}
