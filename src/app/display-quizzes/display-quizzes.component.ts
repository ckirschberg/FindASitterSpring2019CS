import { TempDataService } from './../service/temp-data.service';
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../entities/quiz';

@Component({
  selector: 'app-display-quizzes',
  templateUrl: './display-quizzes.component.html',
  styleUrls: ['./display-quizzes.component.scss']
})
export class DisplayQuizzesComponent implements OnInit {
  quizzes: Quiz[];

  constructor(private data: TempDataService) { }

  ngOnInit() {
    this.quizzes = this.data.quizzes;
  }

}
