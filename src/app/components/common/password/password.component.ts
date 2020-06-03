import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import User from '../../../models/User';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

    resetForm = {
        email: ''
    };

    errorMsg = null;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
    }

    reset(): void {
        this.http.post('http://randi/auth/reset', this.resetForm).subscribe((res) => {
            this.router.navigate(['/login']);
            console.log('email: ', this.resetForm.email);
        }, (err) => {
            console.log(err);
            this.errorMsg = err.error.message;
        });
    }
}
