import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public home = 'home';

  constructor() {
    console.log('home constructor called')
   }

  ngOnInit() {
  }

}
