import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  public isLoading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)

}
