import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';

import { InputFormComponent } from '../common/input-form/input-form.component';
import { AuthService } from '../common/services/auth.service';
import { ProductService } from '../common/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productList
  constructor(private sanitizer: DomSanitizer,public authService:AuthService,
    public productService:ProductService,public dialog: MatDialog,
    public spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.authService.isAutinticated().then((data)=>{
    console.log(data)

    })
    console.log(this.productService.storedProductList)
    this.getProductList()
  }

  getProductList(){
    this.spinner.show()
    this.productService.getProduct().subscribe((data)=>{
      this.productList = data['data']
      this.productList.forEach((item) => {
        item.image = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64,${item.image}`);
      })
      //this.productService.storedProductList = this.productList
      this.selectCompany('Awzing')
      this.spinner.hide()
    },(error)=>{
      this.spinner.hide()
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InputFormComponent, {
      maxWidth: '100vw',
      width: '500px',
      maxHeight: '600px',
      data: {page_key: 'product', animal: "tiger"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getProductList()
    });
  }

  selectCompany(name){
    this.productService.storedProductList = this.productList.filter(item => item.company === name)
  }
}
