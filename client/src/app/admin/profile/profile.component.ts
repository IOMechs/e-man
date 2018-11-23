import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'em-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }
  user: any;
  editSection = false ;
  EditInfoGroup: FormGroup;
  ngOnInit() {
    this.getUser();
    this.EditInfoGroup = new FormGroup({
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
    this.EditInfoGroup.patchValue(this.user);
  }

  closeEditSection() {
    this.editSection = false;
  }

  edit() {
   const formData = this.EditInfoGroup.value;
   this.userService.updateUser(formData).subscribe(data => {
      this.userService.setUser(formData);
      this.getUser();
      this.snackBar.open('successfully updated', '' , {
        duration: 1500,
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      });
   });
   this.editSection =  false;
  }
}
