import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    siteKey: string;

    loginForm = this.formBuilder.group({
        username: [''],
        password: [''],
        recaptcha: ['']
    });

    loginFormValue = {
        username: '',
        password: ''
    };

    failed = null;

    errorMsg = null;


    constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {
        this.siteKey = "6LceEtEZAAAAALv3qgt1PVdBi0GEGBbPNtwWh_5a";
    }

    ngOnInit(): void {
    }

    login(): void {
        console.log('this aform: ', this.loginForm);
        this.loginFormValue.password = this.loginForm.value.password;
        this.loginFormValue.username = this.loginForm.value.username;
        if (this.failed >= 3 && this.loginForm.value.recaptcha.length === 0) {
            this.errorMsg = 'Kérjük töltsd ki a captchat';
            return;
        }
        this.http.post('http://straxus/auth/login', this.loginFormValue).subscribe((res) => {
            this.router.navigate(['/dashboard']);
            localStorage.setItem('user', JSON.stringify(res));
            this.failed = 0;
            localStorage.setItem('failed', this.failed);
        }, (err) => {
            console.log(err);
            this.failed = localStorage.getItem("failed");
            if (this.failed === null) {
                this.failed = 1;
            } else {
                this.failed++;
            }
            localStorage.setItem('failed', this.failed);
            this.errorMsg = err.error.message;
        });
    }
}

