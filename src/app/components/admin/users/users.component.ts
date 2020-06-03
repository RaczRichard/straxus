import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../../../models/User';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: User[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<User[]>('http://randi/user/list').subscribe((res) => {
            this.users = res;
        });
    }

    delete(userid) {
        this.http.post('http://randi/user/deleteUser', {id: userid}).subscribe((res) => {
            this.users.forEach((user, index) => {
                if (user.id === userid) {
                    this.users.splice(index, 1);
                }
            });
        });
    }
}
