"use strict";
var router_1 = require('@angular/router');
var adminHome_component_1 = require('./adminHome.component');
var manageUsers_component_1 = require('./manageUsers.component');
var userDetail_component_1 = require('./userDetail.component');
var changepassword_component_1 = require('./changepassword.component');
var manageServers_component_1 = require('./manageServers.component');
var serverDetail_component_1 = require('./serverDetail.component');
var adminRoutes = [
    {
        path: '',
        component: adminHome_component_1.AdminHomeComponent,
        children: [
            { path: 'user', component: userDetail_component_1.UserDetailComponent },
            { path: 'user/:id', component: userDetail_component_1.UserDetailComponent },
            { path: 'users', component: manageUsers_component_1.ManageUsersComponent },
            { path: 'server', component: serverDetail_component_1.ServerDetailComponent },
            { path: 'server/:id', component: serverDetail_component_1.ServerDetailComponent },
            { path: 'servers', component: manageServers_component_1.ManageServersComponent },
            { path: 'changepassword', component: changepassword_component_1.ChangePasswordComponent }
        ]
    }
];
exports.adminRouting = router_1.RouterModule.forChild(adminRoutes);
//# sourceMappingURL=admin.routes.js.map