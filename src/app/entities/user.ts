export class User {
  _id: string;
  username: string;
  password?: string;
  email: string;
  gender: Gender; 
  birthDate: Date;
}

export enum Gender {
  MALE, FEMALE, OTHER
}