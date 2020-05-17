import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    registerForm = {
        email: '',
        password: '',
    };

    public constructor(private http: HttpClient, private router: Router) {

    }

    ngOnInit(): void {
    }

    save() {
        this.http.post('http://randi/auth/register', this.registerForm).subscribe((res) => {
            this.router.navigate(['/login']);
        });
    }
}
