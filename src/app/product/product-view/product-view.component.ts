import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductService } from 'src/app/common/services/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product
  allProducts
  companyProductList
  constructor(public route:ActivatedRoute,public productService:ProductService,
    public sanitizer:DomSanitizer,public spinner:NgxSpinnerService) { }

  ngOnInit() {
    this.allProducts =  this.productService.storedProductList.slice()
    let id = this.route.snapshot.params['id']
    if(!this.productService.storedProductList){
      this.getProductList(id)
    }else{
      this.selectProduct(id)
    }
  }

  selectProduct(id){
    console.log(this.productService.storedProductList)
    this.allProducts =  this.productService.storedProductList.slice()
    this.product = this.allProducts.filter(item => item.id == id)[0]
    this.selectCompany(this.product.company)
  }

  getProductList(id){
    this.spinner.show()
    this.productService.getProduct().subscribe((data)=>{
      this.productService.storedProductList = data['data']
      // this.productService.storedProductList.forEach((item) => {
      //   item.image = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpg;base64,${item.image}`);
      // })
      this.selectProduct(id)
      this.spinner.hide()
    },(error)=>{
      console.log(error)
      this.spinner.hide()
    })
  }

  selectCompany(name){
    this.productService.storedProductList = this.productService.storedProductList.filter(item => item.company === name)
  }
}
