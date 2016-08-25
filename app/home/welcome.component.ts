import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/home/welcome.component.html'
})
export class WelcomeComponent {
    public pageTitle: string = "Welcome";
}