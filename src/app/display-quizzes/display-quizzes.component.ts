import { TempDataService } from './../service/temp-data.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { AppState } from '../store';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.scss']
})
export class DisplayQuizzesComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    // Subscribe to the redux store (quizzes).
    this.ngRedux.select(state => state.quizzes).subscribe(result => {
      this.quizzes = result.quizzes;
    });
    // this.quizzes = this.data.quizzes;
  }

  handleQuizClicked(quiz: Quiz) : void {
    // Do whatever I want to handle the event.
    
    console.log(quiz);
  }
}
