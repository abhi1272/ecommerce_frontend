import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { NgxUiLoaderModule, NgxUiLoaderService } from "ngx-ui-loader";

import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
// import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import { ProductListViewComponent } from './product/product-list-view/product-list-view.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { AuthGuard } from './common/services/auth-guard.service';
import { AuthService } from './common/services/auth.service';
import { ShowTableComponent } from './common/show-table/show-table.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { GalleryComponent } from './common/gallery/gallery.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { CustomerComponent } from './cutomer/customer/customer.component';
import { CustomerListComponent } from './cutomer/customer-list/customer-list.component';
import { CustomerViewComponent } from './cutomer/customer-view/customer-view.component';
import { CustomerCreateComponent } from './cutomer/customer-create/customer-create.component';
import { BillListComponent } from './bill/bill-list/bill-list.component';
import { BillViewComponent } from './bill/bill-view/bill-view.component';
import { CashbookListComponent } from './cashbook/cashbook-list/cashbook-list.component';
import { CashbookCreateComponent } from './cashbook/cashbook-create/cashbook-create.component';
import { InputFormComponent } from './common/input-form/input-form.component';
import { LoaderComponent } from './common/loader/loader.component';
import { LoaderInterceptor } from './_helper/loader.intercepator';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { SharedService } from './common/services/shared.service';
import { RegisterComponent } from './auth/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductListViewComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    LoginComponent,
    ProductCreateComponent,
    ShowTableComponent,
    GalleryComponent,
    ProductViewComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerViewComponent,
    CustomerCreateComponent,
    BillListComponent,
    BillViewComponent,
    CashbookListComponent,
    CashbookCreateComponent,
    InputFormComponent,
    LoaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMatSelectSearchModule,
    MatNativeDateModule,
    MatButtonModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    // ToastrModule.forRoot({
    //   timeOut: 5000,
    //   positionClass: 'toast-top-right',
    //   preventDuplicates: true,
    // }),
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    ProductCreateComponent,
    InputFormComponent
  ],
  providers: [AuthGuard, AuthService,NgxSpinnerService,SharedService,
    NgxUiLoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
