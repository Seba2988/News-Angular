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
  constructor(
    private searchService: SearchServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchService.articlesToDisplay.subscribe((articles) => {
      this.articles = articles;
    });
  }
}
