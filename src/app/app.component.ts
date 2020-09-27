import {Component} from '@angular/core';
import {AuthServiceService} from './services/auth-service.service';

@Component({
    selector: 'app-root',
    template: `
        <re-captcha (resolved)="resolved($event)" siteKey="YOUR_SITE_KEY"></re-captcha>`,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'straxus';

    constructor(public authService: AuthServiceService) {
    }

    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }

}
