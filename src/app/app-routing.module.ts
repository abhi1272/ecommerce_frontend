import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductListViewComponent } from './product/product-list-view/product-list-view.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './common/services/auth-guard.service';
import { GalleryComponent } from './common/gallery/gallery.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { CustomerListComponent } from './cutomer/customer-list/customer-list.component';
import { BillListComponent } from './bill/bill-list/bill-list.component';
import { CashbookListComponent } from './cashbook/cashbook-list/cashbook-list.component';
import { RegisterComponent } from './auth/register/register.component';


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'about', component: AboutComponent },
{ path: 'contact', component: ContactComponent},
{ path: 'product', component: ProductComponent },
{ path: 'product-list', component: ProductListViewComponent },
{ path: 'product/view/:id', component: ProductViewComponent },
{path: 'customer-list',component:CustomerListComponent},
{path: 'bill-list',component:BillListComponent},
{path: 'cashbook-list',component:CashbookListComponent},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{path: 'gallery',component:GalleryComponent},
{ path: "**", component: NotFoundComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
