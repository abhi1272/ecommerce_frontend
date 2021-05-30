import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthGuard } from 'src/app/guards/auth.guard'
import { CategoryComponent } from './components/category/category.component'
import { PharmacistComponent } from './components/pharmacist/pharmacist.component'
import { RolesComponent } from './components/roles/roles.component'
import { UsersComponent } from './components/users/users.component'

const routes: Routes = [
  {
    path: 'pharmacist-list',
    component: PharmacistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user-list',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'role-list',
    component: RolesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'category-list',
    component: CategoryComponent,
    canActivate: [AuthGuard]
  }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
