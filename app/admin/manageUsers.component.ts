import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from '../viewModel/User.Model';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/Admin/manageUsers.component.html',
    providers: [AuthenticationService]
})

export class ManageUsersComponent {
    constructor(
        private _router: Router, private _Authservice: AuthenticationService, private _titleService: Title) { }

    pageTitle: string = "Manage Users";
    MyUsername: string = "Admin";
    Users: User[];

    onClickCreateUser() {
        this._router.navigate(['manage/user']);
    }

    onClickEditUser(user: User) {
        this._router.navigate(['manage/user', user.Id]);
    }

    ngOnInit()
    {
        this.Users = this._Authservice.getUsers();
        this._titleService.setTitle("AFB_ManageUsers")
    }

    onKeyupSearchUser(txt: string) {       
        if (txt == "")
            this.Users = this._Authservice.getUsers();
        else
            this.Users = this._Authservice.getUsers().filter(
                x => x.Name.toLowerCase().indexOf(txt.toLowerCase()) >=0);

    }
}