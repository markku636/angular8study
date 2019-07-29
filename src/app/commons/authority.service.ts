import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginModel, UserInfo, ResultModel, JWT } from '../definitions/model';
import { DataService } from './data.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { DialogService } from '../components/shared/dialog/dialog.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  constructor(private dataService: DataService, private router: Router, private dialogService: DialogService) {
    this.currentUserSubject = new BehaviorSubject<UserInfo>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  private currentUserSubject: BehaviorSubject<UserInfo>;
  public currentUser: Observable<UserInfo>;

  public get currentUserValue(): UserInfo {
    return this.currentUserSubject.value;
  }

  public ssologin(token: string) {
    var self = this;
    var body = { token: token }
    this.dataService.post(environment.apiHost + "/api/user/SSOLogOn", body, function (result: ResultModel) {
      if (result.valid) {
        var userInfo: UserInfo = result.data;
        if (userInfo && userInfo.jwt.accessToken) {
          localStorage.setItem('currentUser', JSON.stringify(userInfo));
          self.currentUserSubject.next(userInfo);
          self.router.navigate(['/bms/campaign']);
          document.body.className = 'hold-transition skin-blue sidebar-mini';
          window.dispatchEvent(new Event('resize'));
        }
      } else {
        self.dialogService.show("AccessDenied", result.message)
      }
    })
  }

  public login(loginModel: LoginModel) {
    // debugger;
    var self = this;
    var userInfo  = new UserInfo();
    userInfo.userCode = loginModel.usercode;
    userInfo.jwt =  new JWT()
    userInfo.userId = 1
    localStorage.setItem('currentUser', JSON.stringify(userInfo));
    self.currentUserSubject.next(userInfo);
    self.router.navigate(['/bms/campaign']);
    document.body.className = 'hold-transition skin-blue sidebar-mini';
    window.dispatchEvent(new Event('resize'));

    // this.dataService.post(environment.apiHost + "/api/user/LogOn", loginModel, function (result: ResultModel) {
    //   if (result.valid) {
    //     var userInfo: UserInfo = result.data;
    //     if (userInfo && userInfo.jwt.accessToken) {
    //       localStorage.setItem('currentUser', JSON.stringify(userInfo));
    //       self.currentUserSubject.next(userInfo);
    //       self.router.navigate(['/bms/campaign']);
    //       document.body.className = 'hold-transition skin-blue sidebar-mini';
    //       window.dispatchEvent(new Event('resize'));
    //     }
    //   } else {
    //     self.dialogService.show("AccessDenied", result.message)
    //   }
    // })
    
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // no imp
  refreshToken(): Observable<UserInfo> {
    // todo ajax get
    var observable = Observable.create(function (observer) {

      var user: UserInfo = new UserInfo();
      user.userId = 1;
      user.userCode = "mark"
      user.jwt.accessToken = "999"
      user.jwt.refreshToken = "4444"

      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      observer.next(user);
      observer.complete();
    });
    return observable;
  }
}