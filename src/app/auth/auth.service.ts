import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(): Observable<boolean> {
      // Here, we want to call a webservice to log in.


    return of(true).pipe(
      delay(1000),
      tap(val => {
        console.log("logged in!");
        this.isLoggedIn = true
      })
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}