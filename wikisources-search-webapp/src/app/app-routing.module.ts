import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultsViewComponent} from "./searches/results-view/results-view.component";
import {MainSearchViewComponent} from "./searches/main-search-view/main-search-view.component";
import {ArticleViewComponent} from "./searches/article-view/article-view.component";
import {AdvancedSearchViewComponent} from "./searches/advanced-search-view/advanced-search-view.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'advanced',
    component: AdvancedSearchViewComponent
  },
  {
    path: 'article',
    component: ArticleViewComponent
  },
  {
    path: 'main',
    component: MainSearchViewComponent
  },
  {
    path: 'results',
    component: ResultsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
