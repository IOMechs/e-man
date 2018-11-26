import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { USER } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'em-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }
  user: USER;
  editSection = false;
  editInfoForm: FormGroup;
  ngOnInit() {
    this.getUser();
    this.editInfoForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  getUser() {
    this.user = this.userService.getUser();
  }

  editInformation() {
    this.editSection = true;
    this.editInfoForm.patchValue(this.user);
  }

  closeEditSection() {
    this.editSection = false;
  }

  edit() {
    const formData = this.editInfoForm.value;
    this.userService.updateUser(formData).subscribe(data => {
      this.userService.setUser(formData);
      this.user = data.user;
      this.snackBar.open('successfully updated', '', {
        duration: 1500,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
    });
    this.editSection = false;
  }
}
