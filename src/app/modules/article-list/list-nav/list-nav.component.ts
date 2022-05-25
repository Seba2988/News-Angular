import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/shared/services/search-service.service';

@Component({
  selector: 'app-list-nav',
  templateUrl: './list-nav.component.html',
  styleUrls: ['./list-nav.component.scss'],
})
export class ListNavComponent implements OnInit {
  page: number;
  totalPages: number;
  constructor(
    private searchService: SearchServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchService.pagesNav.subscribe((nav) => {
      this.page = nav.page;
      this.totalPages = nav.totalPages;
    });
  }
  onNavClick(whereTo: string) {
    const searchBy = this.router.url.slice(1);
    const newPage = whereTo === 'next' ? this.page + 1 : this.page - 1;
    this.searchService.setPage(newPage, searchBy);
    window.scrollTo(0, 0);
  }
}
