import { TestBed } from '@angular/core/testing';

import { QuizApiService } from './quiz-api.service';

describe('QuizApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuizApiService = TestBed.get(QuizApiService);
    expect(service).toBeTruthy();
  });
});
