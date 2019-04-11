import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { Quiz } from './entities/quiz';

@Injectable({ providedIn: 'root'})
export class QuizActions {
constructor (
  private ngRedux: NgRedux<AppState>) {} 
  
  static LOG_IN: string = 'LOG_IN'; 
  static CREATE_QUIZ: string = 'CREATE_QUIZ'; 
  
  createQuiz(quiz: Quiz) :void {
    this.ngRedux.dispatch({
      type: QuizActions.CREATE_QUIZ,
      payload: quiz
    }); 
  }

  setLoggedIn(isLoggedIn: boolean): void {
    console.log(isLoggedIn);
    
    this.ngRedux.dispatch({
      type: QuizActions.LOG_IN,
      payload: isLoggedIn
    })

  }
}
