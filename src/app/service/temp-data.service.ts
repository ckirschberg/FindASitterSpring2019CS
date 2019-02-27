import { Injectable } from '@angular/core';
import { Quiz } from '../entities/quiz';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {

  constructor() { }

  getQuiz() : Quiz {
    return { 
      _id: '1', visible: false, userId: '1', title: 'Dogs', 
      questions: [
        {title: 'How many feet does a puddle have?', 
          options: [
            {answer: '1', correct: false},
            {answer: '2', correct: false},
            {answer: '3', correct: false},
            {answer: '4', correct: true}
          ]
        },
        {title: 'How long do you need to walk a dog?', 
          options: [
            {answer: 'For 10 minutes', correct: false},
            {answer: 'For 20 minutes', correct: false},
            {answer: 'For 30 minutes', correct: true},
            {answer: 'For 40 minutes', correct: false},
          ]}] 
    };
  }
}
