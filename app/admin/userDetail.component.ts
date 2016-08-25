import { Component} from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../shared/authentication.service'
import { User } from '../viewModel/User.Model';
import { Server} from '../viewModel/Server.Model';
import {NotificationService} from '../shared/notification';

@Component({
    templateUrl: 'app/admin/userDetail.component.html'
})
export class UserDetailComponent {
    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private _router: Router,
        private _service: AuthenticationService,
        private _titleService: Title,
        private notificationService: NotificationService) { }

    pageTitle: string = "Create User";
    MyUsername: string = "Admin";
    ShowDelete: boolean = false;
    ShowActivate: boolean = false;
    ShowUserInfo: boolean = true;
    SubmitText: string = "Create";
    servers: Server[];
    server = new Server(0, "--Select--", "", "");
    user = new User(0, '', '', '', '2', true, this.server);
    userDetailForm: FormGroup;
    selectedId: number = 0;



    ngOnInit() {

        this.route.params.subscribe(params => {

            this.selectedId = params['id'];
        });
       
        if (this.selectedId) {
            this.pageTitle = "Edit User";
            this.user = this._service.getUser(this.selectedId);
            this.ShowDelete = this.user.IsActive;
            this.ShowActivate = !this.user.IsActive;
            this.SubmitText = "Update";
            this._titleService.setTitle("AFB_CreateUser");
        }

        this.servers = this._service.getServers();
        this.userDetailForm = this.formBuilder.group({
            Username: [this.user.Username, Validators.required],
            Password: [this.user.Password, Validators.required],
            Id: [this.user.Id],
            Name: [this.user.Name, Validators.required],
            Role: [this.user.Role],
            IsActive: [this.user.IsActive],
            LastLogin: [this.user.LastLogin],
            uProduceId: [this.user.uProduceDetail.Id],
            uProduceDetail: [this.user.uProduceDetail],
            confirmPassword: [this.user.Password, Validators.required]
        });
    }

    onClickCreate(user) {
        if (user.Password != user.confirmPassword) {
            this.notificationService.printErrorMessage("Password and Confirm Password does not match.");
            return false;
        }
        else {
            user.uProduceDetail = this.servers.find(x => x.Id == user.uProduceId);
            if (user.Id == 0) {
                this._service.addUser(user);
                this.notificationService.printSuccessMessage("User added successfully.");
            }
            else {

                this._service.updateUser(user);
                this.notificationService.printSuccessMessage("User updated successfully.");
            }
            this.SubmitText = "Update";
            return true;
        }
    }
    onClickSave() {
        this._router.navigate(['/manage/users']);
    }

    onClickDelete(user) {
        this.notificationService.openConfirmationDialog('Are you sure you want to remove '
            + user.Name + '?',
            () => {
                user.uProduceDetail = this.servers.find(x => x.Id == user.uProduceId);
                user.IsActive = false;
                this._service.updateUser(user);
                this.notificationService.printSuccessMessage("User deleted sucessfully");
                this._router.navigate(['/manage/users']);
            }, () =>
            { console.log("Deletion canceled"); }
        );
    }

    onClickActivate(user) {
        this.notificationService.openConfirmationDialog('Are you sure you want to allow '
            + user.Name + ' to login again?',
            () => {
                user.uProduceDetail = this.servers.find(x => x.Id == user.uProduceId);
                user.IsActive = true;
                this._service.updateUser(user);
                this.notificationService.printSuccessMessage("User activated sucessfully");
                this._router.navigate(['/manage/users']);
            }, () =>
            { console.log("Activation cacel"); }
        );
    }
    onClickBack() {
        this._router.navigate(['/manage/users']);
    }
}

