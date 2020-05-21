import { Component, OnInit } from '@angular/core';
import {SearchService, Source, Search} from "../search.service";
import {SharedDataService} from "../shared-data.service";

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent implements OnInit {

  resultsCount: number = -1;
  timeCountMiliseconds: number = -1;
  sources: Source[] = [];

  constructor(private searchService: SearchService, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.onSearchOptionsChanged$.subscribe(x => this.search());
    this.search();
  }

  search() {
    // this.searchService.searchSources(undefined, undefined, this.sharedDataService.actualSearchOptions.any, undefined, undefined, undefined, undefined, undefined)
      this.searchService.searchSourcesWithFilterOptions(this.sharedDataService.onSearchOptionsChanged$.value)
      .subscribe(
        search => {
          this.resultsCount = search.hits;
          this.timeCountMiliseconds = search.took;
          this.sources = search.source;
        }
      );
  }
}
