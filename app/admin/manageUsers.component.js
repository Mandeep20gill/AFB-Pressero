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
var router_1 = require('@angular/router');
var authentication_service_1 = require('../shared/authentication.service');
var ManageUsersComponent = (function () {
    function ManageUsersComponent(_router, _Authservice, _titleService) {
        this._router = _router;
        this._Authservice = _Authservice;
        this._titleService = _titleService;
        this.pageTitle = "Manage Users";
        this.MyUsername = "Admin";
    }
    ManageUsersComponent.prototype.onClickCreateUser = function () {
        this._router.navigate(['manage/user']);
    };
    ManageUsersComponent.prototype.onClickEditUser = function (user) {
        this._router.navigate(['manage/user', user.Id]);
    };
    ManageUsersComponent.prototype.ngOnInit = function () {
        this.Users = this._Authservice.getUsers();
        this._titleService.setTitle("AFB_ManageUsers");
    };
    ManageUsersComponent.prototype.onKeyupSearchUser = function (txt) {
        if (txt == "")
            this.Users = this._Authservice.getUsers();
        else
            this.Users = this._Authservice.getUsers().filter(function (x) { return x.Name.toLowerCase().indexOf(txt.toLowerCase()) >= 0; });
    };
    ManageUsersComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/Admin/manageUsers.component.html',
            providers: [authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, authentication_service_1.AuthenticationService, platform_browser_1.Title])
    ], ManageUsersComponent);
    return ManageUsersComponent;
}());
exports.ManageUsersComponent = ManageUsersComponent;
//# sourceMappingURL=manageUsers.component.js.map