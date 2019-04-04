import { QuizActions } from './quiz.actions';
import { QuizState } from './store';
import { tassign } from 'tassign';

const INITIAL_STATE: QuizState = {isLoggedIn: false, quizzes: []}

export function quizReducer(state: QuizState = INITIAL_STATE, action:any) {
 switch (action.type) {
  case QuizActions.LOG_IN:
    
    // state.isLoggedIn = action.payload; // No No! You cannot modify state in Redux!
    // Make a copy of the state
    // Change isLoggedIn variable in the copy.
    console.log(action);
    // Shallow copy of the state object and changes isLoggedIn of the copy.
    return tassign(state, {isLoggedIn: action.payload});

    // return Object.assign({}, state, { isLoggedIn: action.payload });

    

    // return tassign(state, { isBaby: action.payload });
   default:
    return state;
}
}
