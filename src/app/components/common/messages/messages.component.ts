import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Room from '../../../models/Room';

@Component({
    selector: 'app-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

    rooms: Room[] = [];

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get<Room[]>('http://randi/chat/getRooms').subscribe((res) => {
            this.rooms = res;
        });
    }

}
