"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var adminRoutes = [
    {
        path: 'manage',
        loadChildren: 'app/admin/admin.module#AdminModule'
    }
];
var appRoutes = [
    { path: '', component: login_component_1.LoginComponent }
].concat(adminRoutes);
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map