import { Routes, RouterModule }   from '@angular/router';
import {LoginComponent} from './login/login.component';

const adminRoutes: Routes = [
       {
        path: 'manage',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }
];


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    ...adminRoutes
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);