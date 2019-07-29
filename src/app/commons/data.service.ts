
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

import { DialogComponent } from '../components/shared/dialog/dialog.component';
import { LoadingDialogComponent } from '../components/shared/loading-dialog/loading-dialog.component';


@Injectable()
export class DataService {
  private requestTimeout: number = 30000;
  bsModalRef: BsModalRef;
  loading: BsModalRef;

  constructor(private http: HttpClient, private modalService: BsModalService) {

  }

  private showLoading(showLoading: boolean) {
    if (showLoading) {
      this.loading = this.modalService.show(LoadingDialogComponent, {
        animated: false,
        class: 'modal-dialog-centered'
      });
    }
  }

  private async hideLoading(showLoading: boolean) {
    if (showLoading) {
      await this.delay(1300);
      this.loading.hide();
    }
  }

  private delay(millisecond: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(resolve, millisecond);
    })
  }

  get(url: string, callback: Function, errorCallback?: Function, completeCallback?: Function, showLoading: boolean = true, timeout?: number, ) {
    this.showLoading(showLoading);

    timeout = timeout | this.requestTimeout;
    this.http.get(url).timeout(timeout)
      .subscribe(
        (response) => {
          this.hideLoading(showLoading).then(() => {
            let result = response;

            callback(result);
          });
        },
        (response) => {
          this.hideLoading(showLoading).then(() => {
            if (errorCallback)
              errorCallback(response);
            else
              this.errorDialog(response);
          });
        },
        () => {
          this.hideLoading(showLoading).then(() => {
            if (completeCallback)
              completeCallback.call(this);
          });
        });
  }

  post(url: string, body: any, callback: Function, errorCallback?: Function, completeCallback?: Function, showLoading: boolean = true, timeout?: number, ) {
    this.showLoading(showLoading);
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    timeout = timeout | this.requestTimeout;
    this.http.post(url, body, { headers: headers })
      .timeout(timeout)
      .subscribe(
        (response) => {
          this.hideLoading(showLoading).then(() => {
            let result = response;

            callback(result);
          });
        },
        (response) => {
          this.hideLoading(showLoading).then(() => {
            if (errorCallback)
              errorCallback(response);
            else
              this.errorDialog(response);
          });
        },
        () => {
          this.hideLoading(showLoading).then(() => {
            if (completeCallback)
              completeCallback();
          });
        });
  }

  errorDialog(response: any) {
    let modalOptions: ModalOptions = {
      animated: false,
      class: '',
      initialState: { title: 'Error', message: 'GeneralError' }
    }

    if (response.status == 401) {
      modalOptions.initialState = {
        title: "No Login", message: response.statusText, closeCallback: () => {
          window.location.href = window.location.origin + "/login";
        }
      }

      this.bsModalRef = this.modalService.show(DialogComponent, modalOptions);
    }
    else if (response.status == 403) {

      modalOptions.initialState = {
        title: "AccessDenied", message: response.statusText, closeCallback: () => {
          window.location.href = window.location.origin + "/login";
        }
      }
      this.bsModalRef = this.modalService.show(DialogComponent, modalOptions);
    }
    else {
      this.bsModalRef = this.modalService.show(DialogComponent, modalOptions);
    }
  }
}