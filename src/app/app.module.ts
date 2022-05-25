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
import { HeaderComponent } from './shared/components/header/header.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { ListNavComponent } from './modules/article-list/list-nav/list-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleLinkComponent,
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CategoriesComponent,
    ListNavComponent,
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
