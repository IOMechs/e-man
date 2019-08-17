import { Component, OnInit, ElementRef, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { USER } from '../../interfaces/user';
import { UserService } from 'src/app/core/services/user/user.service';
declare const $: any;

@Component({
  selector: 'em-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleMenuBar = new EventEmitter();
  user: USER;

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

  toggleMenu() {
    this.toggleMenuBar.emit();
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
