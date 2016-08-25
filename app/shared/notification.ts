
import { Injectable } from '@angular/core';

declare var alertify: any;

@Injectable()
export class NotificationService {
    private _notifier: any = alertify;

    constructor() { }

    /*
    Opens a confirmation dialog using the alertify.js lib
    */
    openConfirmationDialog(message: string, okCallback: () => any, noCallback: () => any) {
        this._notifier.confirm(message, function (e) {
            if (e) {
                okCallback();
            } else {
                noCallback();
            }
        });
    }

    /*
    Prints a success message using the alertify.js lib
    */
    printSuccessMessage(message: string) {

        this._notifier.success(message);
    }

    /*
    Prints an error message using the alertify.js lib
    */
    printErrorMessage(message: string) {
        this._notifier.error(message);
    }

    timerAlert(message: string, sec: number = 10, okCallback: () => any, noCallback: () => any) {
        let dilog = this._notifier.dialog('alert');
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
                } else {
                    noCallback();
                }
            }, 'alertPopup'
            ).set({ title: 'Warning', 'labels': { ok: 'Yes', cancel: 'No' }});
        };
        function sleep(seconds) {
            var e = new Date().getTime() + (seconds * 1000);
            while (new Date().getTime() <= e) { }
        }


    }
}
