import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './components/pages/nav/nav.component';
import { FooterComponent } from './components/pages/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CatergoriesComponent } from './components/layout/catergories/catergories.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularMaterialModule } from './module/angular-material/angular-material.module';
import { DetailPageComponent } from './components/pages/detail-page/detail-page.component';
import { SpinnerService } from './services/spinner.service';
import { LoadingInterceptor } from './url';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    CatergoriesComponent,
    DetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularMaterialModule,
    CarouselModule
  ],
  providers: [
  {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
