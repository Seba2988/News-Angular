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
  private _totalPages = new Subject<number>();
  totalPages = this._totalPages.asObservable();
  private _page = new BehaviorSubject<number>(1);
  page = this._page.asObservable();

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

  setArticleDisplayed(article) {
    this._articleDisplayed = article;
  }

  setPage(page: number, category?: string) {
    this._page.next(page);
    if (category === 'home' || category === 'article') {
      this.searchAllNews(this._page.value);
    } else if (category === 'search') {
      this.searchNews(this._page.value, this._searchedKey);
    } else {
      this.searchByCategories(this._page.value, category, this.searchedKey);
    }
  }
  private _articlesToDisplay = new Subject();
  articlesToDisplay = this._articlesToDisplay.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  setArticles(res, searchKey?) {
    this._response = res;
    this._totalResults = this._response.totalResults;
    this._articlesToDisplay.next(this._response.articles);
    this._searchedKey = searchKey ? searchKey : '';
    if (this._totalResults)
      this._totalPages.next(Math.ceil(this._totalResults / 20));
    else this._totalPages.next(1);
    console.log(res);
  }

  searchNews(page: number, searchKey: string) {
    this._hasBeenSearched = true;
    this._page.next(page);
    const url: string = `${environment.NEWS_MAIN_URL}everything?q=${searchKey}&page=${page}&language=en&apiKey=${environment.NEWS_API_KEY}`;
    this.http.get(url).subscribe((res) => {
      this.setArticles(res, searchKey);
    });
  }
  searchAllNews(page: number) {
    this._hasBeenSearched = false;
    this._page.next(page);
    // console.log(this._page.value);
    const url: string = `${environment.NEWS_MAIN_URL}top-headlines?country=gb&page${page}&apiKey=${environment.NEWS_API_KEY}`;
    this.http.get(url).subscribe((res) => {
      this.setArticles(res);
    });
  }

  searchByCategories(page: number, category: string, searchKey?: string) {
    this._hasBeenSearched = false;
    this._page.next(page);
    const q = searchKey ? `q=${searchKey}&` : '';
    const url: string = `${environment.NEWS_MAIN_URL}top-headlines?category=${category}&language=en&page=${page}&${q}apiKey=${environment.NEWS_API_KEY}`;
    this.http.get(url).subscribe((res) => {
      this.setArticles(res, searchKey);
    });
  }
}
