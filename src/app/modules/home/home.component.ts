import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from 'src/app/shared/services/search-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private searchService: SearchServiceService) {}

  ngOnInit(): void {
    this.searchService.searchAllNews(1);
  }
}
