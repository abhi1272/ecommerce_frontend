import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  public baseUrl = 'http://localhost:5000/api/v1'


  constructor(public _http:HttpClient){}

  isAutinticated(){
    const promise = new Promise((resolve,reject) =>{
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }


  login(loginData){
    let myResponse = this._http.post(this.baseUrl+'/users/login',loginData)
    this.loggedIn = true;
    return myResponse
  }

  logout(){
    this.loggedIn = false;
  }

  signUP(signUpData){
    let myResponse = this._http.post(this.baseUrl+'/users/signup',signUpData)
    return myResponse
  }
}
