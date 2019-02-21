export class Quiz {
  _id: string;
  visible: boolean;
  userId: string;
  title: string;
  created?: Date; // ? = optional field
  questions: Question[]; 
}
export class Question {
  title: string;
  options: Option[];
}
export class Option {
  answer: string;
  correct: boolean;
}
