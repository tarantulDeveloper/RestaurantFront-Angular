import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';
import { EmployeeService } from 'app/services/employee.service';
import { Observable } from 'rxjs';
import { NotEnoughComponent } from '../not-enough/not-enough.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  finances: Observable<ApiResponse> | any
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.finances = this.employeeService.getAllMoney();
  }

  addEquipment(marketingForm: NgForm){
    this.employeeService.addEquipment(marketingForm.value.summa).subscribe(
      (res) => {
        marketingForm.reset()
        location.reload()
      }
    );
    
  }

  minusEquipment(minusForm: NgForm){
    this.employeeService.minusEquipment(minusForm.value.minus).subscribe(
      (res) => {
        minusForm.reset()
        location.reload()
      },
      (err) => {
        console.log(err);
        
        this.openDialog()
      }
    )
  }
  
    openDialog(){
      let dialogRef = this.dialog.open(NotEnoughComponent,
        {
          width: "550px",
          height: "200px",
          panelClass: 'registerDialog'
        });
      dialogRef.afterClosed().subscribe()
  }

}
