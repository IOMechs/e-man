import { Router } from '@angular/router';
import { LoginForm } from './../core/common/login';
import { AuthService } from './../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'em-forgot-passwordc',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;
  passwordErrorMessage = '';

  constructor(private snackBar: MatSnackBar, private authService: AuthService, private route: Router, private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }
  get forgotPasswordControls() { return this.forgotPasswordForm.controls; }

  onSubmit() {
    if (!this.forgotPasswordForm.invalid) {
      const formData = this.forgotPasswordForm.value;
      const message = this.authService.forgotPassword(formData);
      this.showToast(message);
    }
  }

  showToast(message) {
    this.snackBar.open(message, '' , {
      duration: 2000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center'
    });
  }
}
