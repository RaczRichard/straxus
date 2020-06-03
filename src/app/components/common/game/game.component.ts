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

    matchFrom = [{
        name: null,
    }];

    gameForm = {
        gender: null,
        tol: null,
        ig: null,
    };

    limit = 0;
    matchList: ProfileResponse[] = [];
    profileList: ProfileResponse[];

    seged = 0;
    currentIndex = 0;

    genders = [
        {id: 'No', name: 'Nő'},
        {id: 'Ferfi', name: 'Férfi'},
    ];


    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        this.http.post<ProfileResponse[]>('http://randi/game/get', this.matchList).subscribe((res) => {
            this.matchList = res;
            this.seged = 0;
        });

    }


    search() {
        this.http.post<ProfileResponse[]>('http://randi/game/searchGame', this.gameForm).subscribe((res) => {
            // console.log('Keresési feltétel: ', this.gameForm);
            console.log('res: ', res);
            this.profileList = res;
            this.limit = this.profileList.length;
            this.seged = 1;
        });

    }

    like() {
        console.log('currentIndex: ', this.profileList[this.currentIndex].id);
        this.http.post<number>('http://randi/game/likee', this.profileList[this.currentIndex]).subscribe((res) => {
            console.log('amit elküld: ', this.profileList[this.currentIndex - 1].id);
        });
        this.currentIndex++;
        if (this.currentIndex === this.limit) {
            this.currentIndex = 0;
        }
    }


    disLike() {
        if (this.currentIndex === this.limit) {
            this.currentIndex = 0;
        }
        this.currentIndex++;
    }
}
