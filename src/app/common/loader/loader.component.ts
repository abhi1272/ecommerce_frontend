import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { LoaderService } from '../services/loader.service';


      @Component({
        selector: 'app-loading',
        templateUrl: 'loader.component.html'
      })
      export class LoaderComponent implements OnInit, AfterViewInit  {

        loading: boolean = false;
        constructor(private loaderService: LoaderService,
            private ngxLoader: NgxUiLoaderService,private cdRef : ChangeDetectorRef) {
          
        }
        ngOnInit() {
            
        }

        ngAfterViewInit (){
            setTimeout(() => {
            this.loaderService.isLoading.subscribe((v) => {
                this.loading = v;
                if(this.loading){
                    this.ngxLoader.start();
                    this.cdRef.detectChanges();
                }else{
                    this.ngxLoader.stop();
                    this.cdRef.detectChanges();
                }
              });
            });
        }

      }