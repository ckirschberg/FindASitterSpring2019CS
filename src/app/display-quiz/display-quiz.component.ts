import { TempDataService } from './../service/temp-data.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-quiz',
  templateUrl: './display-quiz.component.html',
  styleUrls: ['./display-quiz.component.scss']
})
export class DisplayQuizComponent implements OnInit {
  quiz: Quiz;

  constructor(private tempData: TempDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.quiz = this.tempData.getQuiz();

    // Get the id from the url
    const id = this.route.snapshot.paramMap.get('id');

    // Find the quiz object based on id
    this.quiz = this.tempData.findQuiz(id);
    // Load the quiz in the html

  }

}
