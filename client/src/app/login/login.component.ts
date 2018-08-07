import { Router } from '@angular/router';
import { Login } from './../core/common/login';
import { AuthService } from './../core/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'em-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("",{
      validators:[ Validators.required]
    }),
    password: new FormControl("",{
      validators:[ Validators.required]
    })
  });

  

  constructor(private authService: AuthService, private route: Router) {
   }

  ngOnInit() {
  }

  onSubmit(){
    const formData = this.loginForm.value; 
    this.authService
    .login(formData)
    .subscribe(
      (data : Login) => {
        if(data){
          this.route.navigate(['/admin']);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
