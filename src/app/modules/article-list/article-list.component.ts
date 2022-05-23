import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/shared/services/search-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  articles;
  page: number;
  totalPages: number;
  constructor(
    private searchService: SearchServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchService.articlesToDisplay.subscribe((articles) => {
      this.articles = articles;
      // console.log(this.articles);
    });
    this.searchService.page.subscribe((page) => {
      this.page = page;
    });
    this.searchService.totalPages.subscribe((pages) => {
      this.totalPages = pages;
    });
  }
  onNavClick(whereTo: string) {
    const searchBy = this.router.url.slice(1);
    const newPage = whereTo === 'next' ? this.page + 1 : this.page - 1;
    this.searchService.setPage(newPage, searchBy);
    window.scrollTo(0, 0);
  }
}
