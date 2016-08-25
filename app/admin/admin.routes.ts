import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent }    from './adminHome.component';
import { ManageUsersComponent }    from './manageUsers.component';
import {UserDetailComponent} from './userDetail.component';
import {ChangePasswordComponent} from './changepassword.component';
import {ManageServersComponent} from './manageServers.component';
import {ServerDetailComponent} from './serverDetail.component';
const adminRoutes: Routes = [
    {
        path: '',
        component: AdminHomeComponent,
        children: [
            { path: 'user', component: UserDetailComponent },
            { path: 'user/:id', component: UserDetailComponent },
            { path: 'users', component: ManageUsersComponent },
            { path: 'server', component: ServerDetailComponent },
            { path: 'server/:id', component: ServerDetailComponent },
            { path: 'servers', component: ManageServersComponent },
            { path: 'changepassword', component: ChangePasswordComponent }
        ]
    }
];

export const adminRouting = RouterModule.forChild(adminRoutes);


