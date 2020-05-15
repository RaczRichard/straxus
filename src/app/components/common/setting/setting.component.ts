import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import ProfileResponse from '../../../models/ProfileResponse';


@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

    settings: ProfileResponse;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {
        this.http.get<ProfileResponse>('http://randi/profile/get').subscribe((res) => {
            this.settings = res;
        });
    }

    save() {
        this.http.post('http://randi/profile/save', this.settings).subscribe((res) => {
            console.log(res);
        });
    }
}
