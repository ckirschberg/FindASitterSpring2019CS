import { QuizActions } from './quiz.actions';
import { QuizState } from './store';
import { tassign } from 'tassign';
import { TempDataService } from './service/temp-data.service';

let temp = new TempDataService();
const INITIAL_STATE: QuizState = {isLoggedIn: false, quizzes: temp.quizzes }

export function quizReducer(state: QuizState = INITIAL_STATE, action:any) {
 switch (action.type) {
   case QuizActions.CREATE_QUIZ:
   // Create a copy of the array with the original quiz objects + action.payload.
   // return a new state object.
   
   // Javascript spread operator (...)
    // state.quizzes.push(action.payload);
    // return state;
    // newState.push(action.payload);

   return tassign(state, { quizzes: [...state.quizzes, action.payload] });

   case QuizActions.CREATE_RATING:
    // action.payload: rating object, id of quiz
    // action.payload.rating
    // action.payload.quizId
    // How to add an object to an array within an object in an array.
   
   case QuizActions.UPDATE_QUIZ:
    // action.payload: new quiz object
    // How to replace an object in an array without mutating state.
    return 

   case QuizActions.DELETE_QUIZ:
    // action.payload: id of the quiz
    // How to create a new array with a missing object from another array.
    // const newArray = state.quizzes.filter(x => x._id !== action.payload);
    return 


  case QuizActions.LOG_IN:
    
    // state.isLoggedIn = action.payload; // No No! You cannot modify state in Redux!
    // return state;

    // Make a copy of the state
    // Change isLoggedIn variable in the copy.
    console.log(action);
    // Shallow copy of the state object and changes isLoggedIn of the copy.
    return tassign(state, {isLoggedIn: action.payload});

    // return Object.assign({}, state, { isLoggedIn: action.payload });

    

   default:
    return state;
}
}
