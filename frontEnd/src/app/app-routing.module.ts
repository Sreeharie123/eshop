import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { DetailPageComponent } from './components/pages/detail-page/detail-page.component';
import { CartpageComponent } from './components/pages/cartpage/cartpage.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignUpComponent},
  {path:'categoryDetail',component:DetailPageComponent},
  {path:'cart',component:CartpageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
