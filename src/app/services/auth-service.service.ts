import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import LoginResponse from '../models/LoginResponse';
import SettingsResponse from '../models/SettingResoponse';

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {

    constructor(private router: Router) {
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }

    logout(): void {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

    getToken(): string {
        const user: LoginResponse = JSON.parse(localStorage.getItem('user'));
        return user ? user.token : '';
    }
    profile(): void {
        const user: SettingsResponse = JSON.parse(localStorage.getItem('user'));
        this.router.navigate(['/profile']);
    }
}
