import { TestBed } from '@angular/core/testing';

import { SearchArticleGuard } from './search-article.guard';

describe('SearchArticleGuard', () => {
  let guard: SearchArticleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SearchArticleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
