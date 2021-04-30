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
      const fetchedData = data[0]?data[0]:data['data'][0]
      const columnDefs = []
      const allowedKeys = ['productName','company','MRP','Rate'] 
      Object.keys(fetchedData).forEach((item)=>{
        if(allowedKeys.includes(item)){
           columnDefs.push({field:item, sortable: true, filter: true})
        }
      })
      this.productData = {
        data : Array.isArray(data)?data:data['data'],
        columnDefs: columnDefs,
        page_name: 'Product',
        page_key: 'product'

      } 
    },(error)=>{
      console.log(error)
    })
  }

}
