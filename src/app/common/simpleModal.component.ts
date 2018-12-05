import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { $ } from 'protractor';
import { JQ_TOKEN } from './JQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: './simpleModal.component.html',
    styles: [`modal-body {height: 250px; overflow-y: scroll;}`]
})

export class SimpleModalComponent implements OnInit {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalcontainer') containerEl: ElementRef

    closeModal(){
        if(this.closeOnBodyClick.toLocaleLowerCase() ==="true"){
        this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
    constructor(@Inject(JQ_TOKEN) private $:any) { }

    ngOnInit() { }
}