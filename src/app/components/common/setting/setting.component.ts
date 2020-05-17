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
    settings: ProfileResponse = {
        id: null,
        username: null,
        address: null,
        height: null,
        physique: null,
        age: null,
        child: null,
        job: null,
        live: null,
        looking: null,
        school: null,
        status: null,
        gender: null,
    };

    schools = [
        {id: 'altalanos iskola', name: 'Általános iskola'},
        {id: 'kozepiskola', name: 'Középiskola'},
        {id: 'oKJ-s kepzes', name: 'OKJ-s képzés'},
        {id: 'egyetem', name: 'Egyetem'}
    ];
    lookings = [
        {id: 'Komoly kapcsolat', name: 'Komoly kapcsolat'},
        {id: 'Alkalmi kapcsolat', name: 'Alkalmi kapcsolat'},
        {id: 'Baratkozas', name: 'Barátkozás'},
    ];
    physiques = [
        {id: 'vekony', name: 'vékony'},
        {id: 'atlagos', name: 'átlagos'},
        {id: 'sportos', name: 'sportos'},
        {id: 'molett/mackos', name: 'molett/mackós'},
        {id: 'tulsulyos', name: 'túlsúlyos'},
    ];
    genders = [
        {id: 'No', name: 'Nő'},
        {id: 'Ferfi', name: 'Férfi'},
    ];
    numbers: number[];


    constructor(private http: HttpClient, private router: Router) {
        this.numbers = new Array(100).fill(100).map((x, i) => i); // [0,1,2,3,4,...,100]
    }

    ngOnInit(): void {
        this.http.get<ProfileResponse>('http://randi/profile/get').subscribe((res) => {
            console.log('erről van szó:', res);
            this.settings = res;
        });
    }

    save() {
        this.http.post('http://randi/profile/save', this.settings).subscribe((res) => {
            console.log(res);
        });
    }

    test() {
        console.log(this.settings);
    }
}
