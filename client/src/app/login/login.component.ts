import { Router } from '@angular/router';
import { LoginForm } from './../core/common/login';
import { AuthService } from './../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'em-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  passwordErrorMessage = '';

  constructor(private snackBar: MatSnackBar,private authService: AuthService, private route: Router, private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['', [
          Validators.required
        ]
      ]
    });
  }
  get loginControls() { return this.loginForm.controls; }

  onSubmit() {
    if (!this.loginForm.invalid) {
      const formData = this.loginForm.value;
      this.authService
      .login(formData)
      .subscribe(
        (data: LoginForm) => {
          this.route.navigate(['/admin']);
        },
        (err) => {
          if (err.error.message === 'Invalid password') {
            this.passwordErrorMessage = err.error.message;
          } else {
            this.showToast(err.error.message);
          }
        }
      );
    } else {
      this.showToast('Please Provide Valid Inputs');
    }
  }

  showToast(message) {
    this.snackBar.open(message, '' , {
      duration: 10000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}
