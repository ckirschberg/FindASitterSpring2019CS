import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from './entities/quiz';

@Pipe({
  name: 'quizPipe' //used when I apply the pipe(filter)
})
export class QuizPipe implements PipeTransform {

  transform(quizzes: Quiz[], search?: any): any {
    console.log(quizzes);
    console.log(search);
    if (search === undefined) {
      return quizzes;
    }
    // Write code that only returns the quiz objects that match the search
    // quizzes.forEach(quiz => console.log(quiz.created));

    return quizzes.filter(quiz => quiz.title.indexOf(search) !== -1);
  }

}
