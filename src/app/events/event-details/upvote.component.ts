import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
    styleUrls: ['./upvote.component.css'],
    selector: 'upvote',
    templateUrl: './upvote.component.html'
})

export class UpvoteComponent implements OnInit {
    @Input() count: number;
    @Input() set voted(val){
        this.iconColor = val ? "red" : "white";
    }
    @Output() vote = new EventEmitter();
    iconColor: string;


    onClick(){
        this.vote.emit({});
    }
    

    constructor() { }

    ngOnInit() { }
}