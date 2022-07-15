import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService } from './auth-service.service';
import { Observable } from 'rxjs';
import { ApiResponse } from 'app/model/api.response';
import { Employee } from 'app/model/employee.model';
import { MarketExpenses } from 'app/model/marketExpenses.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  PATH_OF_API = "http://localhost:8080";
  
  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  constructor(
    private httpclient: HttpClient,
    private authService: AuthServiceService) { }

  public login(loginData: any){
    return this.httpclient.post(this.PATH_OF_API + "/authenticate", loginData,{headers:this.requestHeader})
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser',{responseType: 'text'});
  }

  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin',{responseType: 'text'});
  }



  public roleMatch(allowedRole: any):boolean {
    let userRole: any = this.authService.getRoles()
    
    if(allowedRole === userRole){
      return true
    }
    return false
  }

  
   
      
  

  

  public getEmployees(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + "/users")
  }

  getEmployeeByUserName(userName: string): Observable<any> {
    return this.httpclient.get(this.PATH_OF_API + "/users/" + userName);
  }

  updateEmployee(userName: string, employee: Employee): Observable<ApiResponse> {
    return this.httpclient.put<ApiResponse>(this.PATH_OF_API + "/users/" + employee.userName, employee);
  }

  deleteEmployee(userName: string): Observable<ApiResponse>{
    return this.httpclient.delete<ApiResponse>(this.PATH_OF_API + "/delete/" + userName)
  }

  public registerEmployee(registerData: any) {
    return this.httpclient.post(this.PATH_OF_API + "/register", registerData,{headers:this.requestHeader})
  }

  public getWorksOfEmployee(userName: string): Observable<any> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + "/works/get/" + userName);
  }
  
  public deleteWorkOfEmployee(identifier: number): Observable<ApiResponse> {
    return this.httpclient.delete<ApiResponse>(this.PATH_OF_API + "/delete/work/" + identifier)
  }

  public addWork(userName: string, task: any) {
    return this.httpclient.post(this.PATH_OF_API + "/work/add/" + userName, task) 
  }

  public addBishkek(locationName: any) {
    return this.httpclient.post(this.PATH_OF_API + "/bishkek", locationName)
  }

  public addBatken(locationName: any) {
    return this.httpclient.post(this.PATH_OF_API + "/batken", locationName)
  }

  public addNaryn(locationName: any) {
    return this.httpclient.post(this.PATH_OF_API + "/naryn", locationName)
  }

  public addTalas(locationName: any) {
    return this.httpclient.post(this.PATH_OF_API + "/talas", locationName)
  }

  public addJalalAbad(locationName: any) {
    return this.httpclient.post(this.PATH_OF_API + "/jalalabad", locationName)
  }

  public addOsh(locationName: any) {
    return this.httpclient.post(this.PATH_OF_API + "/osh", locationName)
  }

  public addIssykKul(locationName: any) {
    return this.httpclient.post(this.PATH_OF_API + "/issykkul", locationName)
  }

  public addChuy(locationName: any) {
    return this.httpclient.post(this.PATH_OF_API + "/chuy", locationName)
  }

  public getIssykKul(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + '/issykkul')
  }

  public getOsh(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + '/osh')
  }

  public getNaryn(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + '/naryn')
  }

  public getTalas(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + '/talas')
  }

  public getChuy(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + '/chuy')
  }

  public getBatken(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + '/batken')
  }

  public getJalalAbad(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + '/jalalabad')
  }

  public getBishkek(): Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + '/bishkek')
  }


  public addMarketing(money: number) {
    return this.httpclient.put(this.PATH_OF_API+"/finance/marketing",money)
  }

  public addSalary(money: number) {
    return this.httpclient.put(this.PATH_OF_API+"/finance/salary",money)
  }

  public addEquipment(money: number) {
    return this.httpclient.put(this.PATH_OF_API+"/finance/equipment",money)
  }

  public getAllMoney():Observable<ApiResponse> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API+"/finance/all")
  }

  public getOverall(): any {
    return this.httpclient.get(this.PATH_OF_API + "/finance/overall");
  }

  public minusMarketing(money:number) {
    return this.httpclient.put(this.PATH_OF_API + "/marketing/minus",money)
  }

  public minusEquipment(money:number) {
    return this.httpclient.put(this.PATH_OF_API + "/equipment/minus", money)
  }

  public minusSalary(money:number) {
    return this.httpclient.put(this.PATH_OF_API + "/salary/minus", money)
  }

  public getExpensesById(id: number):Observable<any> {
    return this.httpclient.get<ApiResponse>(this.PATH_OF_API + "/market/expenses/" + id);
  }

  public updateExpenses(expenses: MarketExpenses): Observable<ApiResponse>  {
    return this.httpclient.put<ApiResponse>(this.PATH_OF_API + "/market/expenses/change", expenses)
  }
  

  
  // updateEmployee(userName: string, employee: Employee): Observable<ApiResponse> {
  //   return this.httpclient.put<ApiResponse>(this.PATH_OF_API + "/users/" + employee.userName, employee);
  // }



  // getEmployeeByUserName(userName: string): Observable<any> {
  //   return this.httpclient.get(this.PATH_OF_API + "/users/" + userName);
  // }


  // public getEmployees(): Observable<ApiResponse> {
  //   return this.httpclient.get<ApiResponse>(this.PATH_OF_API + "/users")
  // }


  // public login(loginData: any){
  //   return this.httpclient.post(this.PATH_OF_API + "/authenticate", loginData,{headers:this.requestHeader})
  // }

}
