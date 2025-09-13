import { TestBed } from '@angular/core/testing';

import { TodoSvc } from './todo-svc';

describe('TodoSvc', () => {
  let service: TodoSvc;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoSvc);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
