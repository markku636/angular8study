import { HttpHandler, HttpInterceptor, HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authority.service';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, switchMap, finalize, filter, take } from 'rxjs/operators';
import { UserInfo } from '../definitions/model';

@Injectable()
export class JWTRefreshTokenInterceptor implements HttpInterceptor {
 
  constructor(private authenticationService: AuthenticationService) { }
 
  isRefreshingToken: boolean = false;
  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
 
  intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any> | any> {
 
    return next.handle(this.addTokenToRequest(request, this.authenticationService.currentUserValue.jwt.accessToken))
      .pipe(
        catchError(err => {
          if (err instanceof HttpErrorResponse) {
            switch ((<HttpErrorResponse>err).status) {
              case 401:
                return this.handle401Error(request, next);              
            }
          } else {
            return throwError(err);
          }
        }));
  }
 
  private addTokenToRequest(request: HttpRequest<any>, token: string) : HttpRequest<any> {
    return request.clone({ setHeaders: { Authorization: `Bearer ${token}`}});
  }
 
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
 
    if(!this.isRefreshingToken) {
      this.isRefreshingToken = true;
 
      // Reset here so that the following requests wait until the token
      // comes back from the refreshToken call.
      this.tokenSubject.next(null);
 
      return this.authenticationService.refreshToken()
        .pipe(
          switchMap((userInfo: UserInfo) => {
            if(userInfo) {
              this.tokenSubject.next(userInfo.jwt.accessToken);;
              localStorage.setItem('currentUser', JSON.stringify(userInfo));
              return next.handle(this.addTokenToRequest(request, userInfo.jwt.accessToken));
            }
 
            return <any>this.authenticationService.logout();
          }),
          catchError(err => {
            return <any>this.authenticationService.logout();
          }),
          finalize(() => {
            this.isRefreshingToken = false;
          })
        );
    } else {
      this.isRefreshingToken = false;
 
      return this.tokenSubject
        .pipe(filter(token => token != null),
          take(1),
          switchMap(token => {
          return next.handle(this.addTokenToRequest(request, token));
        }));
    }
  }
}