import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from './services/spinner.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(public loadingService:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.isLoading.next(true)
    return next.handle(request).pipe(
      finalize(
        ()=>{
           this.loadingService.isLoading.next(false)
        }
      )
    )
  }
}
