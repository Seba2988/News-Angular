import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/shared/services/search-service.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  constructor(
    private searchService: SearchServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (
      this.router.url.slice(1) === 'search' &&
      !this.searchService.hasBeenSearched
    ) {
      this.router.navigate(['']);
    } else this.searchService.searchByCategories(1, this.router.url.slice(1));
  }
}
