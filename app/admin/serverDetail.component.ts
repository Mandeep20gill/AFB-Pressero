import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../shared/authentication.service'
import { User } from '../viewModel/User.Model';
import { Server} from '../viewModel/Server.Model';
import {NotificationService} from '../shared/notification';

@Component({
    templateUrl: 'app/admin/serverDetail.component.html'
})
export class ServerDetailComponent {
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private _router: Router,
        private _service: AuthenticationService,
        private _titleService: Title,
        private notificationService: NotificationService) { }

    pageTitle: string = "Create server";
    MyUsername: string = "Admin";
    SubmitText: string = "Create";
    servers: Server[];
    server = new Server(0, "", "", "");
    serverDetailForm: FormGroup;
    selectedId: number = 0;

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.selectedId = params['id'];
        });

        if (this.selectedId) {
            this.pageTitle = "Edit Server";
            this.server = this._service.getServer(this.selectedId);
            this.SubmitText = "Update";
            this._titleService.setTitle("AFB_CreateServer");
        }

        this.servers = this._service.getServers();
        this.serverDetailForm = this.formBuilder.group({
            uProduceServer: [this.server.uProduceServer, Validators.required],
            uProduceUsername: [this.server.uProduceUsername, Validators.required],
            uProducePassword: [this.server.uProducePassword, Validators.required],
            Id: [this.server.Id]
        });
    }

    onClickCreate(server) {
        if (server.Id == 0) {
            this._service.addServer(server);
            this.notificationService.printSuccessMessage("Server added successfully.");
        }
        else {
            this._service.updateServer(server);
            this.notificationService.printSuccessMessage("Server updated successfully.");
        }
        this.SubmitText = "Update";
        return true;

    }
    onClickSave(server) {
        this.notificationService.timerAlert(`Connecting XMPie Server "` + server.uProduceServer+ '" ...' , 5,
            () => {
                if (server.Id == 0) {
                    this._service.addServer(server);
                    this.notificationService.printSuccessMessage("Server added successfully.");
                }
                else {
                    this._service.updateServer(server);
                    this.notificationService.printSuccessMessage("Server updated successfully.");
                }
            }, () =>
            { console.log("saving canceled"); });


        
        return true;

        // this._router.navigate(['/manage/servers']);
    }

    onClickBack() {
        this._router.navigate(['/manage/servers']);
    }
}

