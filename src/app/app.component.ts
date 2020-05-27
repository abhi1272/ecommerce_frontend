import { Component, OnInit } from '@angular/core';
import { GlobalService } from './shared/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  isCollapsed;
 
  constructor(public globalService:GlobalService){}

  ngOnInit(){
  }

  public logout(){
    localStorage.clear();
    this.globalService.loggedInUser = false;
  }
}
