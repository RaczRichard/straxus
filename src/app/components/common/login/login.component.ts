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

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void {
    this.http.post('http://randi/auth/login', this.loginForm).subscribe((res) => {
      this.router.navigate(['/profile']);
      localStorage.setItem('user', JSON.stringify(res));
    });
  }
}
