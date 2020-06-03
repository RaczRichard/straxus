import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = {
        email: '',
        password: ''
    };

    errorMsg = null;


    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
    }

    login(): void {
        this.http.post('http://randi/auth/login', this.loginForm).subscribe((res) => {
            this.router.navigate(['/setting']);
            localStorage.setItem('user', JSON.stringify(res));
        }, (err) => {
            console.log(err);
            this.errorMsg = err.error.message;
        });
    }
}

