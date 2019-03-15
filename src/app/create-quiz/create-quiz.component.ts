import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TempDataService } from '../service/temp-data.service';
import { Quiz } from '../entities/quiz';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss']
})
export class CreateQuizComponent implements OnInit {
  createQuiz: FormGroup;

  constructor(private fb: FormBuilder, private data: TempDataService) { }

  saveQuiz() {
    console.log(this.createQuiz.value);
    this.data.saveQuiz(this.createQuiz.value as Quiz);
    
  }

  ngOnInit() {
    this.createQuiz = this.fb.group({
      quiztitle: [''],
      question1: [''],  // We want a dynamic form and not this!
      option1_1: [''],
      option1_2: [''],
      option1_3: [''],
      question2: [''],
      option2_1: [''], 
      option2_2: [''], 
      option2_3: [''], 
    })
  }

}
