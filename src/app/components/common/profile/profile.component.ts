import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import ProfileResponse from '../../../models/ProfileResponse';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    profile: ProfileResponse = {
        address: null,
        age: null,
        child: null,
        gender: null,
        height: null,
        id: null,
        job: null,
        live: null,
        looking: null,
        physique: null,
        school: null,
        status: null,
        username: null,
        picturePath: null,
    };

    constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const profileId = this.route.snapshot.paramMap.get('id');
        this.http.get<ProfileResponse>('http://randi/profile/get/' + profileId).subscribe((res) => {
            this.profile = res;
        });
    }

    openChat(): void {

        this.http.get<ProfileResponse>('http://randi/chat/getRoomId/' + this.profile.id).subscribe((chatId) => {
            this.router.navigate(['/chat/' + chatId]);
        });
    }
}

