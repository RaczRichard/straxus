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

    loadedBase64;

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
        picturePath: null,
    };

    request = {
        settings: null,
        fileName: '',
        base64: ''
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
        {id: 'vekony', name: 'Vékony'},
        {id: 'atlagos', name: 'Átlagos'},
        {id: 'sportos', name: 'Sportos'},
        {id: 'molett/mackos', name: 'Molett/Mackós'},
        {id: 'tulsulyos', name: 'Túlsúlyos'},
    ];
    genders = [
        {id: 'No', name: 'Nő'},
        {id: 'Ferfi', name: 'Férfi'},
    ];
    numbers: number[];
    childs = [
        {id: 'nem szeretnek', name: 'Nem szeretnék'},
        {id: 'majd szeretnek', name: 'Majd szeretnek'},
        {id: 'van gyerekem', name: 'Van gyerekem'},
    ];
    lives = [
        {id: 'csaladdal', name: 'Családdal'},
        {id: 'lakotarssal', name: 'Lakótárssal'},
        {id: 'kolegium', name: 'kolegium'},
        {id: 'egyedul', name: 'egyedül'},
    ];

    constructor(private http: HttpClient, private router: Router) {
        this.numbers = new Array(100).fill(100).map((x, i) => i); // [0,1,2,3,4,...,100]
    }

    ngOnInit(): void {
        this.http.get<ProfileResponse>('http://randi/profile/get').subscribe((res) => {
            this.settings = res;
            console.log('profilResponse értékei: ', this.settings);
            console.log('picturePath : ', this.settings.picturePath);
            if (res.picturePath && res.picturePath.length > 0) {
                this.http.get('http://randi/picture/get/' + res.picturePath).subscribe((base64) => {
                    this.loadedBase64 = base64;
                    console.log('Base64: ', this.loadedBase64);
                });
            }
        });
    }

    handleUpload(event) {
        const file = event.target.files[0];
        this.request.fileName = file.name;
        const fr = new FileReader();
        fr.readAsDataURL(file);

        fr.onload = (e) => {
            this.request.base64 = fr.result.toString();
            this.loadedBase64 = this.request.base64;
        };
    }

    save() {
        this.request.settings = this.settings;
        this.http.post('http://randi/profile/save', this.request).subscribe((res) => {
            console.log(res);
        });
    }
}
