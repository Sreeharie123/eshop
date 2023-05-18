import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler){
     let token = localStorage.getItem("token")
    let newRequest=request.clone(
      {
         setHeaders:{"Token":`${token}`}
      }
    )
    return next.handle(newRequest)
  }
}
