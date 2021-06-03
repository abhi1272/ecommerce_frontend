import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

// import {ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseUrl = environment.url

  constructor(public _http: HttpClient) { }


  public createProduct(productData): any {

    const myResponse = this._http.post(this.baseUrl + '/product/add', productData)
    return myResponse
  }

  public editProduct(productData, uuid): any {

    const myResponse = this._http.put(this.baseUrl + `/product/${uuid}`, productData)
    return myResponse
  }

  public getProduct(): Observable<any> {
    const myResponse = this._http.get(this.baseUrl + '/product')
    return myResponse
  }

  public getProductById(uuid): Observable<any> {
    const myResponse = this._http.get(this.baseUrl + `/product?medicine_id=${uuid}`)
    return myResponse
  }


  // public sendEmail(emailBody) {
  //   console.log('send email api called')
  //   let myResponse = this._http.post(this.baseUrl + '/products/mail', emailBody, {
  //     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  //   })
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  //   return myResponse
  // }

  // public handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';

  //   if (error.error instanceof ErrorEvent) {
  //     // client-side error
  //     errorMessage = `Error: ${error.error.message}`;
  //   } else {
  //     // server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;


  //   }
  //   // this.Toastr.error('currectly not able to onnect to server: will be back soon');
  //   //window.alert('currectly not able to onnect to server: will be back soon');
  //   return throwError(errorMessage);
  // }

  public addPrescription(data): Observable<any>{
    return this._http.post(this.baseUrl + '/medicine/prescription', data)
  }


  public getUser(uuid): any{
    return this._http.get(this.baseUrl + `/user/profile/${uuid}`)
  }

  public updateUser(data): Observable<any>{
    return this._http.patch(this.baseUrl + '/user/profile', data)
  }

  public downloadBill(data): Observable<any>{
    return this._http.get(this.baseUrl + `/product/invoice?data=${JSON.stringify(data)}`, {observe: 'response', responseType: 'blob'})
  }

}
