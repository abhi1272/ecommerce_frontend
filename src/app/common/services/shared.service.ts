import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// import {ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  storedProductList;
  public baseUrl = 'http://localhost:4000/api/v1'
  // public baseUrl = 'https://omexbackend.herokuapp.com/api/v1'

  constructor(public _http: HttpClient) { }

  public add(formObjData): any {

    console.log('create add service call',formObjData)
    let myResponse = this._http.post(this.baseUrl + `/${formObjData.page_key}/add`, formObjData.formData)
    return myResponse
  }

  public getProduct() {
    let myResponse = this._http.get(this.baseUrl + '/product')
    return myResponse
  }

  public sendEmail(emailBody) {
    console.log('send email api called')
    let myResponse = this._http.post(this.baseUrl + '/product/mail', emailBody, {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    })
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
    return myResponse
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;


    }
    // this.Toastr.error('currectly not able to onnect to server: will be back soon');
    //window.alert('currectly not able to onnect to server: will be back soon');
    return throwError(errorMessage);
  }


}
