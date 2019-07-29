import { Injectable } from '@angular/core';
import { AlertModel } from 'src/app/definitions/model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private alerts: AlertModel[] = [];
  getAlerts() {
      return this.alerts;
  }

  addAlert(alert: AlertModel) {
      this.alerts.push(alert)
  }

}
