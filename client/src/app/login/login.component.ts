import { Router } from '@angular/router';
import { LoginForm } from './../core/common/login';
import { AuthService } from './../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'em-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private route: Router, private formBuilder: FormBuilder) {
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

  onSubmit(){
    if(!this.loginForm.invalid){
      const formData = this.loginForm.value;
      this.authService
      .login(formData)
      .subscribe(
        (data : LoginForm) => {
          this.route.navigate(['/admin']);
        },
        (err) => {
          console.log(err);
        }
      )
    }
    else{
      console.log("Please Provide Valid Inputs");
    }
  }
}
