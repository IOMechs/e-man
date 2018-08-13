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
  showErrorBox: boolean =  false;
  $errorMessage: string;
  requestSent: boolean = false;

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
    this.requestSent = true;
    if(!this.loginForm.invalid){
      const formData = this.loginForm.value;
      this.showErrorBox =  false; 
      this.authService
      .login(formData)
      .subscribe(
        (data : LoginForm) => {
          this.route.navigate(['/admin']);
        },
        (err) => {
          this.$errorMessage = err.error;
          this.showErrorBox = true;
        }
      )
    }
    else{
      this.$errorMessage = "Please Provide Valid Inputs";
      this.showErrorBox = true;
    }
    this.requestSent = false;
  }

  hideErrorBox($event){
    $event.stopPropagation();
    this.showErrorBox = false;
  }
    

}
