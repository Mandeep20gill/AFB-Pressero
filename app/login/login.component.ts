import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {AuthenticationService} from '../shared/authentication.service'
import {User} from '../viewModel/User.Model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../shared/notification';

@Component({
    selector: 'login',
    providers: [AuthenticationService],
    templateUrl: 'app/Login/login1.component.html',
})

export class LoginComponent {
    pageTitle: string = 'Login';
    RememberMe: boolean = false;
    public isCollapsed: boolean = true;
    public user = new User(0, '', '', '', '', false);
    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private _authService: AuthenticationService, private _titleService: Title, private _notificationService: NotificationService) { }

    ngOnInit() {
        if (localStorage.getItem("chkbx") && localStorage.getItem("chkbx") != '') {
            this.user.Username = localStorage.getItem("username");
            this.user.Password = localStorage.getItem("pwd");
            this.RememberMe = true;
        }
        this.loginForm = this.formBuilder.group({
            Username: [this.user.Username, Validators.required],
            Password: [this.user.Password, Validators.required],
            RememberMe: [this.RememberMe]
        });

        this._titleService.setTitle("AFB-Login");
    }

    onClickLogin(user) {
        if (!this._authService.login(user))
        {
            this._notificationService.printErrorMessage("Login Failed!!");
        }
        else {
            if (user.RememberMe) {
                localStorage.setItem("username", user.Username);
                localStorage.setItem("pwd", user.Password);
                localStorage.setItem("chkbx", "yes");
            }
            else {
                localStorage.removeItem("chkbx");
            }
        }
    }
}
