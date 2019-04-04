import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quiz } from '../entities/quiz';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  @Input() quizInput: Quiz;
  @Output() quizClicked: EventEmitter<Quiz> = new EventEmitter<Quiz>(); 

  constructor() { }

  ngOnInit() {
  }

  emitQuizClicked() {
    this.quizClicked.emit(this.quizInput);
  }

}
