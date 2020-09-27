import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import LoginResponse from '../models/LoginResponse';
import {HttpClient} from "@angular/common/http";
import Permission from "../models/Permission";

@Injectable({
    providedIn: 'root'
})
export class AuthServiceService {

    constructor(private router: Router, private http: HttpClient) {
    }

    getToken(): string {
        const user: LoginResponse = JSON.parse(localStorage.getItem('user'));
        return user ? user.token : '';
    }

    getPermissions(): Permission[] {
        const user: LoginResponse = JSON.parse(localStorage.getItem('user'));
        return user && user.permissions ? user.permissions : [];
    }

    isLoggedIn(): boolean {
        return !!localStorage.getItem('user');
    }

    hasPermission(permission: string): boolean {
        console.log('hasPermission called: ', permission);
        const permissions = this.getPermissions();
        console.log('permissions: ', permissions);
        let hasPermission = false;
        permissions.forEach((p) => {
            console.log('if fölött: ', p.code === permission, p.code, permission);
            if (p.code === permission) {
                hasPermission = true;
            }
        });
        console.log('hasPermission return: ', hasPermission);
        return hasPermission;
    }

    logout(): void {
        localStorage.removeItem('user');
        this.http.get('http://straxus/auth/logout').subscribe((res) => {
            this.router.navigate(['/login']);
        });

    }
}