import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Verification from '../../../models/Verification';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
    selector: 'app-verification',
    templateUrl: './verification.component.html',
    styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

    verification: Verification = {
        id: null,
        userId: null,
        uuid: null
    };

    constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        const uuid = this.route.snapshot.paramMap.get('uuid');
        this.http.get<Verification>('http://randi/auth/verification/' + uuid).subscribe((res) => {
            this.verification = res;
            console.log(res);
        });
    }

}
