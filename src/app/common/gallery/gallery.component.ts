import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      { "image": false, "height": "100px" },
      { "breakpoint": 500, "width": "100%" }
      ]

    this.galleryImages = [
      {
        small: 'assets/img/slides/P_2.JPG',
        medium: 'assets/img/slides/P_2.JPG',
        big: 'assets/img/slides/P_2.JPG'
      },
      {
        small: 'assets/img/slides/P_3.JPG',
        medium: 'assets/img/slides/P_3.JPG',
        big: 'assets/img/slides/P_3.JPG'
      },
      {
        small: 'assets/img/slides/P_4.JPG',
        medium: 'assets/img/slides/P_4.JPG',
        big: 'assets/img/slides/P_4.JPG'
      },
      {
        small: 'assets/img/slides/P_5.JPG',
        medium: 'assets/img/slides/P_5.JPG',
        big: 'assets/img/slides/P_5.JPG'
      },
      {
        small: 'assets/img/slides/P_6.JPG',
        medium: 'assets/img/slides/P_6.JPG',
        big: 'assets/img/slides/P_6.JPG'
      },
      {
        small: 'assets/img/slides/P_7.JPG',
        medium: 'assets/img/slides/P_7.JPG',
        big: 'assets/img/slides/P_7.JPG'
      }
    ];
  }
  
}


