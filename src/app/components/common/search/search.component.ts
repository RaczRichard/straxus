import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import ProfileResponse from '../../../models/ProfileResponse';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    searchForm = {
        name: null,
        age: 0
    };

    profiles: ProfileResponse[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    search(): void {
        this.http.post<ProfileResponse[]>('http://randi/search/get', this.searchForm).subscribe((res) => {
            this.profiles = res;
        });
    }

}
