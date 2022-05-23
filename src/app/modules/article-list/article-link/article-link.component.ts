import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { SearchServiceService } from 'src/app/shared/services/search-service.service';

@Component({
  selector: 'app-article-link',
  templateUrl: './article-link.component.html',
  styleUrls: ['./article-link.component.scss'],
})
export class ArticleLinkComponent implements OnInit {
  @Input() article;
  @Input() index: number;
  constructor(private searchService: SearchServiceService) {}

  ngOnInit(): void {}

  onLinkClick() {
    // console.log(this.article);
    this.searchService.setArticleDisplayed(this.article);
  }
}
