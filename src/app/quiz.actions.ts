import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from './store';
import { Quiz, Rating } from './entities/quiz';

@Injectable({ providedIn: 'root'})
export class QuizActions {
constructor (
  private ngRedux: NgRedux<AppState>) {} 
  
  static LOG_IN: string = 'LOG_IN'; 
  static CREATE_QUIZ: string = 'CREATE_QUIZ'; 
  static UPDATE_QUIZ: string = 'UPDATE_QUIZ'; 
  static DELETE_QUIZ: string = 'DELETE_QUIZ'; 

  static CREATE_RATING: string = 'CREATE_RATING'; 


  createRating(rating: Rating, quizId: string) {
    this.ngRedux.dispatch({
      type: QuizActions.CREATE_RATING,
      // payload: {rating: rating, quizId: quizId}
      payload: {rating, quizId}
    })
  }

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
