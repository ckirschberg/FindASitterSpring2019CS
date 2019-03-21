import { Injectable } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { GeneratedFile } from '@angular/compiler';
import { getRenderedText } from '@angular/core/src/render3';
import { Gender } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class TempDataService {
  quizzes: Quiz[];

  constructor() {
    this.quizzes = this.getQuizzes();  
  }

  saveQuiz(quiz: Quiz): void {
    this.quizzes.push(quiz);
    console.log(this.quizzes);
  }

  findQuiz(searchForId: string) : Quiz {
    return this.quizzes.find(quiz => quiz._id === searchForId);
  }

  getQuizzes() : Quiz[] {
    return [
      { 
        _id: '1', visible: false, user: {
          _id:'1',username: 'mikkel86', email: 'mik@mikkel.dk', gender: Gender.MALE,
          birthDate: new Date(1986,0,1)
        }, title: 'Dogs', created: new Date(2019,2,1),
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
      },
      {
        _id: '2', visible: true, user: {
          _id:'1',username: 'veronique', email: 'vero@veronique.dk', gender: Gender.FEMALE,
          birthDate: new Date(1994,0,1)
        }, title: 'Veroniques quiz', created: new Date(2019, 3, 19),
        questions: [ 
          { title: 'How old are Veronique',
          options: [
            { answer: '132 cm', correct: false },
            { answer: '168 cm', correct: false },
            { answer: '171 cm', correct: true },
            { answer: '182 cm', correct: false },
          ]
          }
        ]
      }
    ];
  }

  getQuiz() : Quiz {
    return { 
      _id: '1', visible: false, user: {
        _id:'1',username: 'veronique', email: 'vero@veronique.dk', gender: Gender.FEMALE,
        birthDate: new Date(1994,0,1)
      }, title: 'Dogs', 
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
