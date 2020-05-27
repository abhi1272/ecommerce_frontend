import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/common/services/product.service';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css']
})
export class ProductListViewComponent implements OnInit {

  constructor(public productService:ProductService) { }

  productData;
  ngOnInit() {
    console.log('product-list called')
    this.getProductData()
  }

  getProductData(){
    this.productService.getProduct().subscribe((data)=>{
      this.productData = data
      console.log(data)
    },(error)=>{
      console.log(error)
    })
  }

}
