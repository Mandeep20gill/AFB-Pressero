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
var forms_1 = require('@angular/forms');
var authentication_service_1 = require('../shared/authentication.service');
var User_Model_1 = require('../viewModel/User.Model');
var Server_Model_1 = require('../viewModel/Server.Model');
var notification_1 = require('../shared/notification');
var UserDetailComponent = (function () {
    function UserDetailComponent(route, formBuilder, _router, _service, _titleService, notificationService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._service = _service;
        this._titleService = _titleService;
        this.notificationService = notificationService;
        this.pageTitle = "Create User";
        this.MyUsername = "Admin";
        this.ShowDelete = false;
        this.ShowActivate = false;
        this.ShowUserInfo = true;
        this.SubmitText = "Create";
        this.server = new Server_Model_1.Server(0, "--Select--", "", "");
        this.user = new User_Model_1.User(0, '', '', '', '2', true, this.server);
        this.selectedId = 0;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedId = params['id'];
        });
        if (this.selectedId) {
            this.pageTitle = "Edit User";
            this.user = this._service.getUser(this.selectedId);
            this.ShowDelete = this.user.IsActive;
            this.ShowActivate = !this.user.IsActive;
            this.SubmitText = "Update";
            this._titleService.setTitle("AFB_CreateUser");
        }
        this.servers = this._service.getServers();
        this.userDetailForm = this.formBuilder.group({
            Username: [this.user.Username, forms_1.Validators.required],
            Password: [this.user.Password, forms_1.Validators.required],
            Id: [this.user.Id],
            Name: [this.user.Name, forms_1.Validators.required],
            Role: [this.user.Role],
            IsActive: [this.user.IsActive],
            LastLogin: [this.user.LastLogin],
            uProduceId: [this.user.uProduceDetail.Id],
            uProduceDetail: [this.user.uProduceDetail],
            confirmPassword: [this.user.Password, forms_1.Validators.required]
        });
    };
    UserDetailComponent.prototype.onClickCreate = function (user) {
        if (user.Password != user.confirmPassword) {
            this.notificationService.printErrorMessage("Password and Confirm Password does not match.");
            return false;
        }
        else {
            user.uProduceDetail = this.servers.find(function (x) { return x.Id == user.uProduceId; });
            if (user.Id == 0) {
                this._service.addUser(user);
                this.notificationService.printSuccessMessage("User added successfully.");
            }
            else {
                this._service.updateUser(user);
                this.notificationService.printSuccessMessage("User updated successfully.");
            }
            this.SubmitText = "Update";
            return true;
        }
    };
    UserDetailComponent.prototype.onClickSave = function () {
        this._router.navigate(['/manage/users']);
    };
    UserDetailComponent.prototype.onClickDelete = function (user) {
        var _this = this;
        this.notificationService.openConfirmationDialog('Are you sure you want to remove '
            + user.Name + '?', function () {
            user.uProduceDetail = _this.servers.find(function (x) { return x.Id == user.uProduceId; });
            user.IsActive = false;
            _this._service.updateUser(user);
            _this.notificationService.printSuccessMessage("User deleted sucessfully");
            _this._router.navigate(['/manage/users']);
        }, function () { console.log("Deletion canceled"); });
    };
    UserDetailComponent.prototype.onClickActivate = function (user) {
        var _this = this;
        this.notificationService.openConfirmationDialog('Are you sure you want to allow '
            + user.Name + ' to login again?', function () {
            user.uProduceDetail = _this.servers.find(function (x) { return x.Id == user.uProduceId; });
            user.IsActive = true;
            _this._service.updateUser(user);
            _this.notificationService.printSuccessMessage("User activated sucessfully");
            _this._router.navigate(['/manage/users']);
        }, function () { console.log("Activation cacel"); });
    };
    UserDetailComponent.prototype.onClickBack = function () {
        this._router.navigate(['/manage/users']);
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/admin/userDetail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forms_1.FormBuilder, router_1.Router, authentication_service_1.AuthenticationService, platform_browser_1.Title, notification_1.NotificationService])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=userDetail.component.js.map