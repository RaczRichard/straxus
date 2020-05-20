import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

    resetForm = {
        email: '',
    };

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
    }

    reset(): void {
        this.http.post('http://randi/auth/reset', this.resetForm).subscribe((res) => {
            this.router.navigate(['/setting']);
            localStorage.setItem('user', JSON.stringify(res));
        });
    }
}
