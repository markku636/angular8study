import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/commons/shared.service';
import { AuthenticationService } from 'src/app/commons/authority.service';
import { LoginModel } from 'src/app/definitions/model';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { DialogService } from '../shared/dialog/dialog.service';

declare var $;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    public loginFormModel: FormGroup;
    private formBuild: FormBuilder = new FormBuilder();


    constructor(
        private router: Router, private authenticationService: AuthenticationService, private dialogService: DialogService
    ) { }

    ngOnInit() {
        document.body.className = 'hold-transition login-page';
        $(() => {
            $('input').iCheck({
                checkboxClass: 'icheckbox_square-blue',
                radioClass: 'iradio_square-blue',
                increaseArea: '20%' /* optional */
            });
        });

        this.loginFormModel = this.formBuild.group({
            userCode: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
            password: ['', Validators.required,],
        });
    }

    login() {
        if (!this.loginFormModel.invalid) {
            var loginModel: LoginModel = new LoginModel();
            loginModel.usercode = this.loginFormModel.getRawValue().userCode;
            loginModel.password = this.loginFormModel.getRawValue().password;
            this.authenticationService.login(loginModel);
        }
        else {
            this.dialogService.show("Warnning", "Please complete the form")
        }
    }
}
