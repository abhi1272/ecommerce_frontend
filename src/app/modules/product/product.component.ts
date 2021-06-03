import { Component, OnInit } from '@angular/core';
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
  categoryName
  constructor(private sanitizer: DomSanitizer, public authService: AuthService,
              public productService: ProductService, public dialog: MatDialog,
              public sharedService: SharedService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((data) => {
      this.categoryName = data.category
    })
    this.getProductList()
  }

  getProductList(): void {
    const api = { api_url: '/medicine' }
    if (this.categoryName) {
      const filter = JSON.stringify({filters: [{ name: 'category', value: this.categoryName }]})
      this.sharedService.getApiFilteredData(api, filter).subscribe((data) => {
        this.productList = data.data
      }, (error) => {
        console.log(error)
      })
    }else{
      this.productService.getProduct().subscribe((data) => {
        this.productList = data.data
      }, (error) => {
        console.log(error)
      })
    }

  }

}
