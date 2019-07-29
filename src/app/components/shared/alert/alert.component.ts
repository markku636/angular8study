import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/commons/shared.service';
import { AlertType } from 'src/app/definitions/enums';
import { AlertModel } from 'src/app/definitions/model';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public alerts: AlertModel[] = [];

  constructor(private alertService: AlertService) {
    this.alerts = this.alertService.getAlerts();

  }

  ngOnInit() { }


  onClosed(dismissedAlert: AlertModel): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

}
