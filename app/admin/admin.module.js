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
var common_1 = require('@angular/common');
var admin_routes_1 = require('./admin.routes');
var adminHome_component_1 = require('./adminHome.component');
var manageUsers_component_1 = require('./manageUsers.component');
var userDetail_component_1 = require('./userDetail.component');
var forms_1 = require('@angular/forms');
var admin_service_1 = require('./admin.service');
var changepassword_component_1 = require('./changepassword.component');
var manageServers_component_1 = require('./manageServers.component');
var serverDetail_component_1 = require('./serverDetail.component');
var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                admin_routes_1.adminRouting
            ],
            declarations: [
                adminHome_component_1.AdminHomeComponent,
                manageUsers_component_1.ManageUsersComponent,
                userDetail_component_1.UserDetailComponent,
                changepassword_component_1.ChangePasswordComponent,
                manageServers_component_1.ManageServersComponent,
                serverDetail_component_1.ServerDetailComponent
            ],
            providers: [
                admin_service_1.AdminService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
//# sourceMappingURL=admin.module.js.map