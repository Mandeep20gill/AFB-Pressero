import {Injectable} from '@angular/core';
import { User} from '../viewModel/User.Model';
import { Server} from '../viewModel/Server.Model';
import { Router} from '@angular/router';
import { Jsonp, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';


var servers = [new Server(0, "--Select--", "", ""),
    new Server(1, "AFB In-House Dev Server", "Tom_Martin", "1234"),
    new Server(2, "AFB In-House Prod Server", "Paul_W", "1234")
]
var users = [
    new User(1, 'Admin', 'admin@admin.com', 'admin', '1', true, servers[0], new Date()),
    new User(2, 'Test User', 'TestUser@gmail.com', 'user', '2', true, servers[0], new Date()),
    new User(3, 'Test User1', 'TestUser1@gmail.com', 'user', '2', true, servers[1], new Date()),
    new User(4, 'Test User2', 'TestUser2@gmail.com', 'user', '2', true, servers[1], new Date("03/08/2016")),
    new User(5, 'Test User3', 'TestUser3@gmail.com', 'user', '2', false, servers[1], new Date("03/04/2016"))
];

@Injectable()
export class AuthenticationService {
    constructor(private jsonp: Jsonp, private _router: Router) { }

    logout() {
        localStorage.removeItem("user");
        this._router.navigate(['']);
    }

    // authenticate user
    login(user) {
        var authenticatedUser = users.find(u => u.Username.toLowerCase() == user.Username.toLowerCase() && u.Password == user.Password);
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
    }

    // get standard users list 
    getUsers() {
        try {
            return users.filter(u => u.Role == '2');
        } catch (error) {
            return null;
        }
    }

    //add User to list
    addUser(user) {
        try {
            var id = users.length + 1;
            user.Id = id;
            users.push(user);
            return true;
        } catch (error) {
            return false;
        }
    }

    // get standard user by id 
    getUser(id) {
        try {
            return users.find(u => u.Role == '2' && u.Id == id);
        } catch (error) {
            return null;
        }
    }

    // update user info
    updateUser(user) {
        try {
            var u = users.find(u => u.Role == '2' && u.Id == user.Id);
            u.Name = user.Name;
            u.Username = user.Username;
            u.Password = user.Password;
            u.IsActive = user.IsActive;
            u.uProduceDetail = user.uProduceDetail;
            return true;
        } catch (error) {
            return false;
        }
    }

    deleteUser(user) {
        try {
            var index = users.indexOf(user, 0);
            if (index > -1)
                users.splice(index, 1);
            return true;
        } catch (error) {
            return false;
        }
    }


    checkCredentials() {
        if (localStorage.getItem("user") === null) {
            this._router.navigate(['']);
        }
    }


    // server functions
    getServers() {
        try {
            return servers;
        } catch (error) {
            return null;
        }
    }
    getServer(id) {
        try {
            return servers.find(u => u.Id == id);
        } catch (error) {
            return null;
        }
    }
    addServer(server) {
        try {
            var id = servers.length + 1;
            server.Id = id;
            servers.push(server);
            return true;
        } catch (error) {
            return false;
        }
    }
    updateServer(server) {
        try {
            var u = servers.find(u => u.Id == server.Id);
            u.uProduceServer = server.uProduceServer;
            u.uProduceUsername = server.uProduceUsername;
            return true;
        } catch (error) {
            return false;
        }
    }



    callhttp() {
        let wikiUrl = 'http://en.wikipedia.org/w/api.php';

        let params = new URLSearchParams();
        params.set('search', "angular"); // the user's search value
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        // TODO: Add error handling
        var result = this.jsonp
            .get(wikiUrl, { search: params })
            .map(request => <string[]>request.json()[1]);
    }
}
