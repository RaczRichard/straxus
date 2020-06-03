import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import LoginResponse from '../models/LoginResponse';

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {

    constructor(private router: Router) {
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }

    isAdmin(): boolean {
        const token = this.getToken();
        try {
            const parsedToken = JSON.parse(atob(token.split('.')[1]));
            return parsedToken.role === '1';
        } catch (e) {
            return false;
        }
    }

    logout(): void {
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    }

    getToken(): string {
        const user: LoginResponse = JSON.parse(localStorage.getItem('user'));
        return user ? user.token : '';
    }
}
