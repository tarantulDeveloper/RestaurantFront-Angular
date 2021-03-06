import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  public setRoles(roles: string){
    localStorage.setItem('roles',JSON.stringify(roles));
  }

  public setUserName(userName: string){
    localStorage.setItem('userName',JSON.stringify(userName))
  }

  public getUserName(): string {
    return JSON.parse(localStorage.getItem('userName') || '{}')
  }

  public getRoles(): string | null {
    return JSON.parse(localStorage.getItem('roles') || '{}');
  }

  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken",jwtToken);
  }

  public getToken():string {
    return localStorage.getItem("jwtToken") || ""
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}
