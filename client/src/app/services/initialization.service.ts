import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class InitializationService {
  
  public readonly initialized$ = new BehaviorSubject<boolean>(false)

  public completeInitialization(): void {
    this.initialized$.next(true)
  }
}
