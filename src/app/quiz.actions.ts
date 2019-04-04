import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';

@Injectable({ providedIn: 'root'})
export class QuizActions {
constructor (
  private ngRedux: NgRedux<AppState>) {} 
  
  static LOG_IN: string = 'LOG_IN'; 
  
  setLoggedIn(isLoggedIn: boolean): void {
    console.log(isLoggedIn);
    
    this.ngRedux.dispatch({
      type: QuizActions.LOG_IN,
      payload: isLoggedIn
    })

  }
}
