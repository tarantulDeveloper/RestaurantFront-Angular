import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpErrorResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError} from 'rxjs';
import { AuthServiceService } from 'app/services/auth-service.service';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.headers.get("No-Auth") === 'True') {
      return next.handle(request.clone())
    }

    const token = this.authService.getToken()
    request = this.addToken(request,token)
    return next.handle(request).pipe(
      catchError(
        (err: HttpErrorResponse) => {
          console.log(err.status);
          if(err.status === 401) {
            this.router.navigate(['/login'])
          } else if (err.status === 403) {
            this.router.navigate(['/forbidden'])
          } 
          return throwError("Something is wrong")
          
        }
      )
    )
  }

  private addToken(request: HttpRequest<any>,token:string){
    return request.clone({
        setHeaders: {
            Authorization: `Bearer ${token}`
        }
    });
}
}
