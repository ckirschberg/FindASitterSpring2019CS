export class User {
  _id: string;
  username: string;
  password: string;
  email: string;
  gender: Gender; 
  birthDate: Date;
}

enum Gender {
  MALE, FEMALE, OTHER
}