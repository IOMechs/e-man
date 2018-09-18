import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { SignupForm } from './../core/common/signup';
import { AuthService } from './../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'em-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

constructor(private authService: AuthService, private formBuilder: FormBuilder,
  private route: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [
          Validators.required,
          Validators.pattern("^[a-zA-Z ,.'-]+$")
        ]
      ],
      lastName: ['', [
          Validators.required,
          Validators.pattern("^[a-zA-Z ,.'-]+$"),
        ]
      ],
      username: ['', [
          Validators.required
        ]
      ],
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

  get signupControls() {
    return this.signupForm.controls;
  }

  onSubmit() {
    if (!this.signupForm.invalid) {
      const formData = this.signupForm.value;
      this.authService
      .signup(formData)
      .subscribe(
        (data: SignupForm) => {
          this.route.navigate(['/admin']);
        },
        (err) => {
          this.snackBar.open(String(err.error), '' , {
            duration: 5000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
          });
          console.log(err);
        }
      );
    } else {
      console.log('Please Provide Valid Inputs');
    }
  }
}
