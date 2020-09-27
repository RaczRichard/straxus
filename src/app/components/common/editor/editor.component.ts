import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
    selector: 'app-dashboard',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {


    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {

    }

}
