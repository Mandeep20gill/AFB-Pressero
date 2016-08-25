import { Component} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
    selector:'adminSection',
    templateUrl: 'app/admin/adminHome.component.html'
})

export class AdminHomeComponent
{
    constructor(private _authService: AuthenticationService) { }

    ngOnInit()
    {
        this._authService.checkCredentials();
    }

    logout() {
        this._authService.logout();
    }
}