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
var Server_Model_1 = require('../viewModel/Server.Model');
var notification_1 = require('../shared/notification');
var ServerDetailComponent = (function () {
    function ServerDetailComponent(route, formBuilder, _router, _service, _titleService, notificationService) {
        this.route = route;
        this.formBuilder = formBuilder;
        this._router = _router;
        this._service = _service;
        this._titleService = _titleService;
        this.notificationService = notificationService;
        this.pageTitle = "Create server";
        this.MyUsername = "Admin";
        this.SubmitText = "Create";
        this.server = new Server_Model_1.Server(0, "", "", "");
        this.selectedId = 0;
    }
    ServerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedId = params['id'];
        });
        if (this.selectedId) {
            this.pageTitle = "Edit Server";
            this.server = this._service.getServer(this.selectedId);
            this.SubmitText = "Update";
            this._titleService.setTitle("AFB_CreateServer");
        }
        this.servers = this._service.getServers();
        this.serverDetailForm = this.formBuilder.group({
            uProduceServer: [this.server.uProduceServer, forms_1.Validators.required],
            uProduceUsername: [this.server.uProduceUsername, forms_1.Validators.required],
            uProducePassword: [this.server.uProducePassword, forms_1.Validators.required],
            Id: [this.server.Id]
        });
    };
    ServerDetailComponent.prototype.onClickCreate = function (server) {
        if (server.Id == 0) {
            this._service.addServer(server);
            this.notificationService.printSuccessMessage("Server added successfully.");
        }
        else {
            this._service.updateServer(server);
            this.notificationService.printSuccessMessage("Server updated successfully.");
        }
        this.SubmitText = "Update";
        return true;
    };
    ServerDetailComponent.prototype.onClickSave = function (server) {
        var _this = this;
        this.notificationService.timerAlert("Connecting XMPie Server \"" + server.uProduceServer + '" ...', 5, function () {
            if (server.Id == 0) {
                _this._service.addServer(server);
                _this.notificationService.printSuccessMessage("Server added successfully.");
            }
            else {
                _this._service.updateServer(server);
                _this.notificationService.printSuccessMessage("Server updated successfully.");
            }
        }, function () { console.log("saving canceled"); });
        return true;
        // this._router.navigate(['/manage/servers']);
    };
    ServerDetailComponent.prototype.onClickBack = function () {
        this._router.navigate(['/manage/servers']);
    };
    ServerDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/admin/serverDetail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, forms_1.FormBuilder, router_1.Router, authentication_service_1.AuthenticationService, platform_browser_1.Title, notification_1.NotificationService])
    ], ServerDetailComponent);
    return ServerDetailComponent;
}());
exports.ServerDetailComponent = ServerDetailComponent;
//# sourceMappingURL=serverDetail.component.js.map