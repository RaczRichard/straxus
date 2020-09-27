import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../../../models/User';
import Permission from "../../../models/Permission";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    users: User[] = [];
    permissions: Permission[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<User[]>('http://straxus/user/userList').subscribe((res) => {
            this.users = res;
            console.log('res: ', res);
        });
        this.http.get<Permission[]>('http://straxus/user/permissionList').subscribe((res2) => {
            this.permissions = res2;
            console.log('res2: ', res2);
        });
    }

}
