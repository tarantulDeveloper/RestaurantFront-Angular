import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'app/model/api.response';
import { EmployeeService } from 'app/services/employee.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

 
  locationName: string
  region: string
  locations: Observable<ApiResponse> | any

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.locationName = this.route.snapshot.params['locationName']
    this.region = this.route.snapshot.params['region']
    if(this.locationName === 'issykkul') {
      this.locations = this.employeeService.getIssykKul();
      
    }

    else if(this.locationName === 'osh') {
      this.locations = this.employeeService.getOsh();
    }

    else if(this.locationName === 'batken') {
      this.locations = this.employeeService.getBatken();
    }

    else if(this.locationName === 'bishkek') {
      this.locations = this.employeeService.getBishkek();
    }

    else if(this.locationName === 'jalalabad') {
      this.locations = this.employeeService.getJalalAbad();
    }

    else if(this.locationName === 'naryn') {
      this.locations = this.employeeService.getNaryn();
    }

    else if(this.locationName === 'talas') {
      this.locations = this.employeeService.getTalas();
    }

    else if(this.locationName === 'chuy') {
      this.locations = this.employeeService.getChuy();
    }
  }

  addLocation(locationForm: NgForm, locationName: string){
    if(locationName === 'bishkek'){
      this.employeeService.addBishkek(locationForm.value.location).subscribe(
        (res) => {
          locationForm.reset()
          location.reload()
          
        }
      )
    }
    
    else if(locationName === 'batken'){
      this.employeeService.addBatken(locationForm.value.location).subscribe(
        (res) => {
          locationForm.reset()
          location.reload()
          
        }
      )
    }

    else if(locationName === 'naryn'){
      this.employeeService.addNaryn(locationForm.value.location).subscribe(
        (res) => {
          locationForm.reset()
          location.reload()
          
        }
      )
    }

    else if(locationName === 'talas'){
      this.employeeService.addTalas(locationForm.value.location).subscribe(
        (res) => {
          locationForm.reset()
          location.reload()
          
        }
      )
    }

    else if(locationName === 'jalalabad'){
      this.employeeService.addJalalAbad(locationForm.value.location).subscribe(
        (res) => {
          locationForm.reset()
          location.reload()
        }
      )
    }

    else if(locationName === 'osh'){
      this.employeeService.addOsh(locationForm.value.location).subscribe(
        (res) => {
          locationForm.reset()
          location.reload()
        }
      )
    }

    else if(locationName === 'issykkul'){
      this.employeeService.addIssykKul(locationForm.value.location).subscribe(
        (res) => {
          locationForm.reset()
          location.reload()
        }
      )
    }

    else if(locationName === 'chuy'){
      this.employeeService.addChuy(locationForm.value.location).subscribe(
        (res) => {
          locationForm.reset()
          location.reload()
        }
      )
    }
  }

}
