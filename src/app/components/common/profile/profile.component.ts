import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  settingForm = {
        name: '',
        age: '',
        weight: '',
        height: '',
        live: '',
        child: '',
        school: '',
        address: '',
        looking: '',
  };

    constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

    mentes(): void {
        this.http.post('http://randi/profile/setting', this.settingForm).subscribe((res) => {
            this.router.navigate(['/profile']);
        });
    }
}

