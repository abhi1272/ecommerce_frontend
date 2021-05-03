import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './common/services/product.service';
import { GlobalService } from './shared/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  isCollapsed;
 
  constructor(public globalService: GlobalService, public productService: ProductService,
              public router: Router){}
  keyword = 'name';
  ngOnInit(){
  }

  public logout(){
    localStorage.clear();
    this.globalService.loggedInUser = false;
  }

  selectEvent(item) {
    this.router.navigate([`/product/view/${item.id}`]);
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }
}
