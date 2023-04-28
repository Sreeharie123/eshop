import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
