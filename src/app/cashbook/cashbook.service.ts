import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CashbookService {


  public baseUrl = 'http://localhost:4000/api/v1'
  // public baseUrl = 'https://omexbackend.herokuapp.com/api/v1'

  constructor(public _http: HttpClient) { }

  public createCashbook(productData): any {

    console.log('create product service call')
    let myResponse = this._http.post(this.baseUrl + '/payment/add', productData)
    console.log(productData)
    return myResponse
  }

  public getCashbook() {
    let myResponse = this._http.get(this.baseUrl + '/payment')
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
