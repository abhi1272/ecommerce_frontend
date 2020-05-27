import { Component, OnInit } from '@angular/core';

import { ProductService } from '../common/services/product.service';

import {Router} from '@angular/router'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Name;
  Email;
  Phone;
  Message;
  constructor(public ProductService: ProductService,
    public router:Router) {
    console.log('contact construtor called')
  }

  ngOnInit() {
  }


  sendMessage() {

    if(this.Name === "" || this.Name === undefined || this.Name === null){
    //  this.toastr.error('complete the form with your Name')
    }
    else if(this.Email === "" || this.Email === undefined || this.Email === null){
      // this.toastr.error('Give us your email to contact you')  
    }else{
      let emailBody = {
        name: this.Name,
        email: this.Email,
        phone: this.Phone,
        message: this.Message
      }
        
    this.ProductService.sendEmail(emailBody).subscribe(

      data =>{
        // this.toastr.success(`${data['name']} , Thanks for contacting, will conatct you soon`)
        this.router.navigateByUrl('/home')
      },error =>{
        // this.toastr.error('some error occured on server, please try again later')
        console.log(error.err.message)
      }
    )

    }
  
  }

}
