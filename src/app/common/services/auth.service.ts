import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  // public baseUrl = 'http://api.awzing.store/api/v1'
  public baseUrl = 'http://localhost:4000/api/v1'


  constructor(public _http: HttpClient) { }

  isAutinticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }


  login(loginData) {
    this.loggedIn = true
    return this._http.post(this.baseUrl + '/users/login', loginData)
  }

  logout() {
    // this.loggedIn = false;
  }

  signUP(signUpData) {
    return this._http.post(this.baseUrl + '/users/signup', signUpData)
  }
}
