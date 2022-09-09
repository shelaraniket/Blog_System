import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AllBlogsComponent } from './pages/all-blogs/all-blogs.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MyBlogsComponent } from './pages/my-blogs/my-blogs.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'my-blogs',
    component:MyBlogsComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'all-blogs',
    component:AllBlogsComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
