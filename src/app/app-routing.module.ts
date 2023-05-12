import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { StaffLoginComponent } from './auth/staff-login/staff-login.component';
import { AuthGuard } from './admin/guards/auth.guard';

const routes: Routes = [
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], data: { roles: ['Admin', 'staff'] }
  },
  {path: 'stafflogin', component: StaffLoginComponent},
  { path: '', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  { path: '**', component: PageNotFoundComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
