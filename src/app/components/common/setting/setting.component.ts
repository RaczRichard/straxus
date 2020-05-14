import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import SettingResponse from "../../../models/SettingResponse";


@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

    setting: SettingResponse[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<SettingResponse[]>('http://randi/profile/get').subscribe((res) => {
            this.setting = res;
            console.log('befut ide');
        });
    }

}
