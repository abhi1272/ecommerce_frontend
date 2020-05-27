import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService:AuthService,public router:Router,public globalService:GlobalService) { }

  loginFlag = true;
  ngOnInit() {
  }

  goToSignUp(){ 
    this.loginFlag = false;
  }

  submitSignUpForm(f:NgForm){
    console.log(f)
    if(f.value.password === f.value.confirm_password){
      let obj = {
        "firstName":f.value.first_name,
        "lastName":f.value.last_name,
        "password":f.value.password,
        "email":f.value.email,
        "mobileNumber":f.value.mobile_number
      }
      this.authService.signUP(obj).subscribe((data)=>{
        this.loginFlag = true;
      },(error)=>{
        console.log(error)
      })
    }else{
      alert('Password mismatch')
    }
  }

  submitLoginForm(f:NgForm){
    this.authService.login(f.value).subscribe((data)=>{
      console.log(data)
      let userObj = {
        user:data['data']['user'],
        token:data['data']['token']
      }
      localStorage.setItem('user', JSON.stringify(userObj));
      this.globalService.loggedInUser = true;
      this.router.navigate(['/home'])
    },(error)=>{
      console.log(error)
    })
  }
}
