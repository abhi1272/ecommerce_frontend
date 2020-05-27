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


const routes: Routes = [{ path: 'home', component: HomeComponent },
{ path: '', component: HomeComponent, pathMatch: 'full' },
{ path: 'about', component: AboutComponent },
{ path: 'product', component: ProductComponent },
{ path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
{ path: 'product-list', component: ProductListViewComponent },
{ path: 'login', component: LoginComponent },
{ path: "**", component: NotFoundComponent }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
