import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    passForm = {
        old: null,
        newPass: null,
        again: null,
    };

    errorMsg = null;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
    }

    changePass() {
        this.http.post('http://randi/auth/passwordChange', this.passForm).subscribe((res) => {
            console.log('new pass: ', this.passForm);
        }, (err) => {
            console.log(err);
            this.errorMsg = err.error.message;
        });
    }
}
