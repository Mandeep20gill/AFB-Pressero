import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { adminRouting } from './admin.routes';
import {AdminHomeComponent} from './adminHome.component'
import { ManageUsersComponent }    from './manageUsers.component';
import {UserDetailComponent} from './userDetail.component';
import { ReactiveFormsModule}   from '@angular/forms';
import { AdminService } from './admin.service';
import {ChangePasswordComponent} from './changepassword.component';
import {ManageServersComponent} from './manageServers.component';
import {ServerDetailComponent} from './serverDetail.component';
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        adminRouting

    ],
    declarations: [
        AdminHomeComponent,
        ManageUsersComponent,
        UserDetailComponent,
        ChangePasswordComponent,
        ManageServersComponent,
        ServerDetailComponent
    ],
    providers: [
        AdminService
    ]
})
export class AdminModule { }