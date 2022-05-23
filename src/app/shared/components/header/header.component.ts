import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from '../../services/search-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private searchService: SearchServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSearch(search) {
    if (search.value.trim().length !== 0) {
      const route = this.router.url.slice(1);
      if (route === 'home') {
        this.searchService.searchNews(1, search.value);
        this.router.navigate(['/search']);
      } else {
        this.searchService.searchByCategories(1, route, search.value);
      }
      search.value = '';
    } else this.router.navigate(['']);
  }
}
