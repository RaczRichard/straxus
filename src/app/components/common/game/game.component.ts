import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import ProfileResponse from '../../../models/ProfileResponse';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    loadedBase64;

    gameForm = {
        gender: null,
        tol: null,
        ig: null,
    };


    likeeList: ProfileResponse[] = [{
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
    }];

    picturePath = null;

    genders = [
        {id: 'No', name: 'Nő'},
        {id: 'Ferfi', name: 'Férfi'},
    ];


    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.http.post<ProfileResponse[]>('http://randi/game/gameSearch').subscribe((res) => {
            this.settings = res;
            console.log('profilResponse értékei: ', this.likeeList);
            console.log('picturePath : ', this.likeeList.picturePath);
            this.http.post('http://randi/picture/get/' + res.picturePath).subscribe((base64) => {
                this.loadedBase64 = base64;
                console.log('Base64: ', this.loadedBase64);
            });
        });
    }

    search() {
        this.http.post<ProfileResponse[]>('http://randi/game/searchGame', this.gameForm).subscribe((res) => {
            console.log('Keresési feltétel: ', this.gameForm);
            this.likeeList = res;
            console.log('likelist: ', this.likeeList);
            this.http.get('http://randi/picture/get/' + res.picturePath).subscribe((base64) => {
                this.loadedBase64 = base64;
                console.log('Base64: ', this.loadedBase64);
            });
        });
    }

    like() {
        console.log('like');
    }

    notLike() {
        console.log('notLike');
    }
}
