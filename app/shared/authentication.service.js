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
var User_Model_1 = require('../viewModel/User.Model');
var Server_Model_1 = require('../viewModel/Server.Model');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var servers = [new Server_Model_1.Server(0, "--Select--", "", ""),
    new Server_Model_1.Server(1, "AFB In-House Dev Server", "Tom_Martin", "1234"),
    new Server_Model_1.Server(2, "AFB In-House Prod Server", "Paul_W", "1234")
];
var users = [
    new User_Model_1.User(1, 'Admin', 'admin@admin.com', 'admin', '1', true, servers[0], new Date()),
    new User_Model_1.User(2, 'Test User', 'TestUser@gmail.com', 'user', '2', true, servers[0], new Date()),
    new User_Model_1.User(3, 'Test User1', 'TestUser1@gmail.com', 'user', '2', true, servers[1], new Date()),
    new User_Model_1.User(4, 'Test User2', 'TestUser2@gmail.com', 'user', '2', true, servers[1], new Date("03/08/2016")),
    new User_Model_1.User(5, 'Test User3', 'TestUser3@gmail.com', 'user', '2', false, servers[1], new Date("03/04/2016"))
];
var AuthenticationService = (function () {
    function AuthenticationService(jsonp, _router) {
        this.jsonp = jsonp;
        this._router = _router;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("user");
        this._router.navigate(['']);
    };
    // authenticate user
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = users.find(function (u) { return u.Username.toLowerCase() == user.Username.toLowerCase() && u.Password == user.Password; });
        if (authenticatedUser) {
            localStorage.setItem("user", authenticatedUser.Username);
            if (authenticatedUser.Role == "1") {
                this._router.navigate(['/manage/users']);
            }
            else {
                this._router.navigate(['Home']);
            }
            return true;
        }
        return false;
    };
    // get standard users list 
    AuthenticationService.prototype.getUsers = function () {
        try {
            return users.filter(function (u) { return u.Role == '2'; });
        }
        catch (error) {
            return null;
        }
    };
    //add User to list
    AuthenticationService.prototype.addUser = function (user) {
        try {
            var id = users.length + 1;
            user.Id = id;
            users.push(user);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    // get standard user by id 
    AuthenticationService.prototype.getUser = function (id) {
        try {
            return users.find(function (u) { return u.Role == '2' && u.Id == id; });
        }
        catch (error) {
            return null;
        }
    };
    // update user info
    AuthenticationService.prototype.updateUser = function (user) {
        try {
            var u = users.find(function (u) { return u.Role == '2' && u.Id == user.Id; });
            u.Name = user.Name;
            u.Username = user.Username;
            u.Password = user.Password;
            u.IsActive = user.IsActive;
            u.uProduceDetail = user.uProduceDetail;
            return true;
        }
        catch (error) {
            return false;
        }
    };
    AuthenticationService.prototype.deleteUser = function (user) {
        try {
            var index = users.indexOf(user, 0);
            if (index > -1)
                users.splice(index, 1);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['']);
        }
    };
    // server functions
    AuthenticationService.prototype.getServers = function () {
        try {
            return servers;
        }
        catch (error) {
            return null;
        }
    };
    AuthenticationService.prototype.getServer = function (id) {
        try {
            return servers.find(function (u) { return u.Id == id; });
        }
        catch (error) {
            return null;
        }
    };
    AuthenticationService.prototype.addServer = function (server) {
        try {
            var id = servers.length + 1;
            server.Id = id;
            servers.push(server);
            return true;
        }
        catch (error) {
            return false;
        }
    };
    AuthenticationService.prototype.updateServer = function (server) {
        try {
            var u = servers.find(function (u) { return u.Id == server.Id; });
            u.uProduceServer = server.uProduceServer;
            u.uProduceUsername = server.uProduceUsername;
            return true;
        }
        catch (error) {
            return false;
        }
    };
    AuthenticationService.prototype.callhttp = function () {
        var wikiUrl = 'http://en.wikipedia.org/w/api.php';
        var params = new http_1.URLSearchParams();
        params.set('search', "angular"); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        // TODO: Add error handling
        var result = this.jsonp
            .get(wikiUrl, { search: params })
            .map(function (request) { return request.json()[1]; });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Jsonp, router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map