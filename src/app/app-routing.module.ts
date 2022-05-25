import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './modules/article/article.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { HomeComponent } from './modules/home/home.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'article', component: ArticleComponent },
  { path: 'search', component: CategoriesComponent },
  { path: 'sports', component: CategoriesComponent },
  { path: 'business', component: CategoriesComponent },
  { path: 'technology', component: CategoriesComponent },
  { path: 'science', component: CategoriesComponent },
  { path: 'health', component: CategoriesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
