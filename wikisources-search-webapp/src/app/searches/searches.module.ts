import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSearchViewComponent } from './main-search-view/main-search-view.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { AdvancedSearchViewComponent } from './advanced-search-view/advanced-search-view.component';
import { ResultCardComponent } from './result-card/result-card.component';
import { ResultsViewComponent } from './results-view/results-view.component';
import { ArticleViewComponent } from './article-view/article-view.component';



@NgModule({
  declarations: [MainSearchViewComponent, SearchHeaderComponent, SearchPanelComponent, AdvancedSearchViewComponent, ResultCardComponent, ResultsViewComponent, ArticleViewComponent],
  imports: [
    CommonModule
  ]
})
export class SearchesModule { }
