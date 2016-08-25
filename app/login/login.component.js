"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var authentication_service_1 = require('../shared/authentication.service');
var User_Model_1 = require('../viewModel/User.Model');
var forms_1 = require('@angular/forms');
var notification_1 = require('../shared/notification');
var LoginComponent = (function () {
    function LoginComponent(formBuilder, _authService, _titleService, _notificationService) {
        this.formBuilder = formBuilder;
        this._authService = _authService;
        this._titleService = _titleService;
        this._notificationService = _notificationService;
        this.pageTitle = 'Login';
        this.RememberMe = false;
        this.isCollapsed = true;
        this.user = new User_Model_1.User(0, '', '', '', '', false);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("chkbx") && localStorage.getItem("chkbx") != '') {
            this.user.Username = localStorage.getItem("username");
            this.user.Password = localStorage.getItem("pwd");
            this.RememberMe = true;
        }
        this.loginForm = this.formBuilder.group({
            Username: [this.user.Username, forms_1.Validators.required],
            Password: [this.user.Password, forms_1.Validators.required],
            RememberMe: [this.RememberMe]
        });
        this._titleService.setTitle("AFB-Login");
    };
    LoginComponent.prototype.onClickLogin = function (user) {
        if (!this._authService.login(user)) {
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
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            providers: [authentication_service_1.AuthenticationService],
            templateUrl: 'app/Login/login1.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, authentication_service_1.AuthenticationService, platform_browser_1.Title, notification_1.NotificationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map