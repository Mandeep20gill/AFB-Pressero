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
var NotificationService = (function () {
    function NotificationService() {
        this._notifier = alertify;
    }
    /*
    Opens a confirmation dialog using the alertify.js lib
    */
    NotificationService.prototype.openConfirmationDialog = function (message, okCallback, noCallback) {
        this._notifier.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
                noCallback();
            }
        });
    };
    /*
    Prints a success message using the alertify.js lib
    */
    NotificationService.prototype.printSuccessMessage = function (message) {
        this._notifier.success(message);
    };
    /*
    Prints an error message using the alertify.js lib
    */
    NotificationService.prototype.printErrorMessage = function (message) {
        this._notifier.error(message);
    };
    NotificationService.prototype.timerAlert = function (message, sec, okCallback, noCallback) {
        if (sec === void 0) { sec = 10; }
        var dilog = this._notifier.dialog('alert');
        dilog.set({
            closable: false,
            label: 'Cancel',
            onfocus: function () { sleep(sec); openPopup(); },
            message: message,
        }).show();
        function openPopup() {
            dilog.close();
            alertify.confirm("Unable to connect to uProduce Server. Do you wish to save record anyway?", function (e) {
                if (e) {
                    okCallback();
                }
                else {
                    noCallback();
                }
            }, 'alertPopup').set({ title: 'Warning', 'labels': { ok: 'Yes', cancel: 'No' } });
        }
        ;
        function sleep(seconds) {
            var e = new Date().getTime() + (seconds * 1000);
            while (new Date().getTime() <= e) { }
        }
    };
    NotificationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.js.map