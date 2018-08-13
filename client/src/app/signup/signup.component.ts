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
  showErrorBox: boolean =  false;
  $errorMessage: string;
  requestSent: boolean = false;

constructor(private authService: AuthService, private formBuilder: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["",[
          Validators.required,
          Validators.pattern("^[a-z ,.'-]+$")
        ]
      ],
      lastName: ["",[
          Validators.required,
          Validators.pattern("^[a-z ,.'-]+$")
        ]
      ],
      username: ["",[
          Validators.required
        ]
      ],
      email: ["",[
          Validators.required, 
          Validators.email
        ]
      ],
      password: ["",[
          Validators.required
        ]
      ]
    })
  }

  get signupControls() {
    return this.signupForm.controls;
  }

  onSubmit(){
    this.requestSent = true;
    if(!this.signupForm.invalid){
      const formData = this.signupForm.value;
      this.showErrorBox =  false; 
      this.authService
      .signup(formData)
      .subscribe(
        (data : SignupForm) => {
          this.route.navigate(['/admin']);
        },
        (err) => {
          this.$errorMessage = err.error;
          this.showErrorBox = true;
          this.requestSent = false;
        }
      )
    }
    else{
      this.$errorMessage = "Please Provide Valid Inputs";
      this.showErrorBox = true;
      this.requestSent = false;
    }
    
  }

  hideErrorBox($event){
    $event.stopPropagation();
    this.showErrorBox = false;
  }

}
