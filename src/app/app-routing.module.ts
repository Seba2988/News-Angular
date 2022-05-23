import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './modules/article/article.component';
import { BusinessComponent } from './modules/business/business.component';
import { HealthComponent } from './modules/health/health.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { ScienceComponent } from './modules/science/science.component';
import { SearchArticleGuard } from './modules/search-article.guard';
import { SearchComponent } from './modules/search/search.component';
import { SportsComponent } from './modules/sports/sports.component';
import { TechnologyComponent } from './modules/technology/technology.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [SearchArticleGuard],
  },
  { path: 'article', component: ArticleComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'health', component: HealthComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
