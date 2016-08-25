import { Component} from '@angular/core';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
    selector:'adminSection',
    templateUrl: 'app/admin/changePassword.component.html'
})

export class ChangePasswordComponent
{
    constructor(private _authService: AuthenticationService) { }
  
}