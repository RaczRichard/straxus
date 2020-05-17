import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import Message from '../../../models/Message';


@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

    messages: Message[] = [];
    interval;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        const roomId = this.route.snapshot.paramMap.get('roomId');
        this.interval = setInterval(() => {
            this.http.get<Message[]>('http://randi/chat/getMessages/' + roomId).subscribe((res) => {
                this.messages = res;
            });
        }, 500);
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

}
