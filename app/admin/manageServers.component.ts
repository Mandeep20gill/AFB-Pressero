import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Server } from '../viewModel/Server.Model';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/authentication.service';

@Component({
    templateUrl: 'app/Admin/manageServers.component.html',
    providers: [AuthenticationService]
})

export class ManageServersComponent {
    constructor(
        private _router: Router, private _Authservice: AuthenticationService, private _titleService: Title) { }

    pageTitle: string = "Manage uProduce Servers";
    MyUsername: string = "Admin";
    Servers: Server[];

    onClickCreateServer() {
        this._router.navigate(['manage/server']);
    }

    onClickEditServer(server: Server) {
        this._router.navigate(['manage/server', server.Id]);
    }

    ngOnInit() {
        this.Servers = this._Authservice.getServers().filter(x => x.Id != 0);
        this._titleService.setTitle("AFB_ManageServers")
    }

    onKeyupSearchServer(txt: string) {        
        if (txt == "")
            this.Servers = this._Authservice.getServers().filter(x => x.Id != 0);
        else
            this.Servers = this._Authservice.getServers().filter(x => x.Id != 0 && (x.uProduceServer.toLowerCase().indexOf(txt.toLowerCase()) >= 0));

    }
}