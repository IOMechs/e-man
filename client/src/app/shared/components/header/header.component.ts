import { Component, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'em-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() toggleValue = new EventEmitter<string>();


    constructor(location: Location,  private element: ElementRef, private router: Router) {
     
    }

    ngOnInit(){

    }

    toggleSlider(){
      $('#sidebar').toggleClass('active');
    }

    
}
