import { OrganizationService } from './../../core/services/organizations/organization.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/core/services/user/user.service';
import { first } from 'rxjs/internal/operators/first';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'em-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  organizations: any = [] ;
  constructor(
    private organizationService: OrganizationService,
    private snackBar: MatSnackBar,
    private userService: UserService
    ) { }

  ngOnInit() {
  this.getOrganization();
  }

  getOrganization() {
    this.userService.$user
    .pipe(
      first(),
      mergeMap(user => {
        return this.organizationService.getOrganization(user);
      })
    )
    .subscribe(
      (data: any) => {
        this.organizations =  data['organizations'].length > 0 ? data['organizations'] : [];
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
