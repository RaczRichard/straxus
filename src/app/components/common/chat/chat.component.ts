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

    roomId;
    messageForm = {
        message: null,
        roomId: null
    };
    messages: Message[] = [];
    interval;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.roomId = this.route.snapshot.paramMap.get('roomId');
        this.interval = setInterval(() => {
            this.http.get<Message[]>('http://randi/chat/getMessages/' + this.roomId).subscribe((res) => {
                this.messages = res;
            });
        }, 2000);
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

    sendMessage() {
        this.messageForm.roomId = this.roomId;
        console.log('this.messageForm', this.messageForm);
        this.http.post('http://randi/chat/sendMessage', this.messageForm).subscribe((res) => {
            this.messageForm.message = null;
        });
    }

}
