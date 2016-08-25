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
var authentication_service_1 = require('../shared/authentication.service');
var AdminHomeComponent = (function () {
    function AdminHomeComponent(_authService) {
        this._authService = _authService;
    }
    AdminHomeComponent.prototype.ngOnInit = function () {
        this._authService.checkCredentials();
    };
    AdminHomeComponent.prototype.logout = function () {
        this._authService.logout();
    };
    AdminHomeComponent = __decorate([
        core_1.Component({
            selector: 'adminSection',
            templateUrl: 'app/admin/adminHome.component.html'
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());
exports.AdminHomeComponent = AdminHomeComponent;
//# sourceMappingURL=adminHome.component.js.map