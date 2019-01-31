import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { User } from 'src/app/shared/interfaces/user';
import { Observable } from 'rxjs/internal/Observable';
import { first } from 'rxjs/internal/operators/first';

@Component({
  selector: 'em-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(public userService: UserService, private snackBar: MatSnackBar) { }
  $user: Observable<User>;
  editSection = false;
  editInfoForm: FormGroup;
  ngOnInit() {
    this.editInfoForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
    this.$user = this.userService.$user;
  }

  editInformation() {
    this.editSection = true;
    this.$user
      .pipe(
        first()
      )
      .subscribe(user => {
        this.editInfoForm.patchValue(user);
      });
  }

  closeEditSection() {
    this.editSection = false;
  }

  edit() {
    const updatedUser = this.editInfoForm.value;
    this.userService.updateUser(updatedUser).subscribe(data => {
      this.userService.setUser(updatedUser);
      this.snackBar.open('successfully updated', '', {
        duration: 1500,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    });
    this.editSection = false;
  }
}
