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

  @Output() toggleMenuBar = new EventEmitter();

  constructor(private router: Router) {
     
  }

  ngOnInit(){

  }

  toggleMenu() {
    this.toggleMenuBar.emit();
  }

    
}
