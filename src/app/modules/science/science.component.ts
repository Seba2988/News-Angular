import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchServiceService } from 'src/app/shared/services/search-service.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.scss'],
})
export class ScienceComponent implements OnInit {
  constructor(
    private searchService: SearchServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.searchService.searchByCategories(this.router.url.slice(1));
    this.searchService.searchByCategories(1, this.router.url.slice(1));
  }
}
