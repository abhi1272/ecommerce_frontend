import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { SharedService } from '../shared/services/shared.service';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList
  caterGoryList = []
  category: string
  categories
  constructor(public authService: AuthService,
              public productService: ProductService, public dialog: MatDialog,
              public sharedService: SharedService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.category = data.category
    })
    console.log('categoryName', this.category)
    this.getProductList()
  }

  getProductList(): void {
    const api = { api_url: '/medicine' }
    if (this.category) {
      const filter = JSON.stringify({filters: [{ name: 'category', value: this.category }]})
      this.sharedService.getApiFilteredData(api, filter).subscribe((data) => {
        this.productList = data.data || []
        this.getCategory()
      }, (error) => {
        console.log(error)
      })
    }else{
      this.productService.getProduct().subscribe((data) => {
        this.productList = data.data || []
        this.getCategory()
      }, (error) => {
        console.log(error)
      })
    }

  }

  getCategory(): void{
    this.sharedService.getEntityData('category').subscribe((data) => {
      this.categories = data.data.map((item) => item.name)
      this.categories.sort()
    })
  }

  getDataWithCategory(category): void{
    console.log(category)
    this.category = category
    this.getProductList()
  }

}
