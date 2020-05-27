import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';

import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule,MatFormFieldModule,MatInputModule,MatButtonModule } from "@angular/material";

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
    ShowTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    AgGridModule.withComponents([]),
    // ToastrModule.forRoot({
    //   timeOut: 5000,
    //   positionClass: 'toast-top-right',
    //   preventDuplicates: true,
    // }),
    AppRoutingModule
  ],
  entryComponents: [
    ProductCreateComponent
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
