import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from 'src/app/models/article.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SearchServiceService {
  private _response;
  private _totalResults: number;
  private _totalPages: number = 1;
  // get totalPages() {
  //   return this._totalPages;
  // }

  private _pagesNav = new BehaviorSubject<{ page: number; totalPages: number }>(
    { page: 1, totalPages: this._totalPages }
  );
  pagesNav = this._pagesNav.asObservable();
  // private _page = new BehaviorSubject<number>(1);
  // page = this._page.asObservable();

  private _hasBeenSearched = false;
  get hasBeenSearched() {
    return this._hasBeenSearched;
  }

  private _articleDisplayed;
  get articleDisplayed() {
    return this._articleDisplayed;
  }

  private _searchedKey = '';
  get searchedKey() {
    return this._searchedKey;
  }

  private _articlesToDisplay = new Subject();
  articlesToDisplay = this._articlesToDisplay.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  setArticleDisplayed(article) {
    this._articleDisplayed = article;
  }

  setPage(page: number, category?: string) {
    this._pagesNav.next({ page: page, totalPages: this._totalPages });
    if (category === 'home') {
      return this.searchAllNews(page);
    }
    if (category === 'search') {
      return this.searchNews(page, this._searchedKey);
    }
    this.searchByCategories(page, category, this.searchedKey);
  }

  setArticles(res, page, searchKey?) {
    this._response = res;
    this._totalResults = this._response.totalResults;
    this._articlesToDisplay.next(this._response.articles);
    this._searchedKey = searchKey ? searchKey : '';
    if (this._totalResults)
      this._totalPages = Math.ceil(this._totalResults / 20);
    else this._totalPages = 1;
    this._pagesNav.next({ page: page, totalPages: this._totalPages });
    console.log(res);
  }

  searchNews(page: number, searchKey: string) {
    this._hasBeenSearched = true;
    const url: string = `${environment.NEWS_MAIN_URL}everything?q=${searchKey}&page=${page}&language=en&apiKey=${environment.NEWS_API_KEY}`;
    this.http.get(url).subscribe((res) => {
      this.setArticles(res, page, searchKey);
    });
  }
  searchAllNews(page: number) {
    this._hasBeenSearched = false;
    const url: string = `${environment.NEWS_MAIN_URL}top-headlines?country=gb&page=${page}&apiKey=${environment.NEWS_API_KEY}`;
    this.http.get(url).subscribe((res) => {
      this.setArticles(res, page);
    });
  }

  searchByCategories(page: number, category: string, searchKey?: string) {
    this._hasBeenSearched = false;
    const q = searchKey ? `q=${searchKey}&` : '';
    const url: string = `${environment.NEWS_MAIN_URL}top-headlines?category=${category}&language=en&page=${page}&${q}apiKey=${environment.NEWS_API_KEY}`;
    this.http.get(url).subscribe((res) => {
      this.setArticles(res, page, searchKey);
    });
  }
}
