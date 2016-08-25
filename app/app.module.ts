import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';

import {Title} from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import { AdminModule} from './admin/admin.module';
import {AuthenticationService} from './shared/authentication.service'
import {NotificationService} from './shared/notification'

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        routing,
        AdminModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent, LoginComponent
    ],
    providers: [
        AuthenticationService, Title, appRoutingProviders, NotificationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }