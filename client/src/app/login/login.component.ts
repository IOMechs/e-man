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

  

  constructor() {
    // this.loginForm = new FormGroup({
    //   email: new FormControl("",{
    //     validators:[ Validators.required]
    //   }),
    //   password: new FormControl("",{
    //     validators:[ Validators.required]
    //   })
    // });
   }

  ngOnInit() {
  }

  onSubmit(){
    const formData = this.loginForm.value; 
    console.log(formData);
  }

}
