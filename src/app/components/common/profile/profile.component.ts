import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../../../models/User';

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

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

    mentes(): void {
        this.router.navigate(['/profile']);
    }
}
