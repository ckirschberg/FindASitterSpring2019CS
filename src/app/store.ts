import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { quizReducer } from './quiz.reducer';
import { Quiz } from './entities/quiz';

export class QuizState {
  isLoggedIn: boolean;
  quizzes: Quiz[];
}
export class AppState {
  quizzes?: QuizState;
}
export const rootReducer = combineReducers<AppState>({
  quizzes: quizReducer,

// router: routerReducer
});
