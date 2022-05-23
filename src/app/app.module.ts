import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ArticleComponent } from './modules/article/article.component';
import { ArticleListComponent } from './modules/article-list/article-list.component';
import { ArticleLinkComponent } from './modules/article-list/article-link/article-link.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/home/home.component';
import { SearchComponent } from './modules/search/search.component';
import { SportsComponent } from './modules/sports/sports.component';
import { TechnologyComponent } from './modules/technology/technology.component';
import { ScienceComponent } from './modules/science/science.component';
import { HealthComponent } from './modules/health/health.component';
import { BusinessComponent } from './modules/business/business.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleLinkComponent,
    HomeComponent,
    SearchComponent,
    SportsComponent,
    TechnologyComponent,
    ScienceComponent,
    HealthComponent,
    BusinessComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
