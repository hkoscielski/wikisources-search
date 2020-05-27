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
  page: number = 1;
  isTimeLocked: boolean = false;

  constructor(private searchService: SearchService, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.sharedDataService.onSearchOptionsChanged$.subscribe(x => this.search());
    this.onPageChange();
  }

  onPageChange() {
    this.isTimeLocked = true;
    this.sharedDataService.onSearchOptionsChanged$.value.size = 10;
    this.sharedDataService.onSearchOptionsChanged$.value.from = (this.page - 1) * this.sharedDataService.onSearchOptionsChanged$.value.size;
    this.sharedDataService.onSearchOptionsChanged$.next(this.sharedDataService.onSearchOptionsChanged$.value);
  }

  search() {
    // this.searchService.searchSources(undefined, undefined, this.sharedDataService.actualSearchOptions.any, undefined, undefined, undefined, undefined, undefined)
      this.searchService.searchSourcesWithFilterOptions(this.sharedDataService.onSearchOptionsChanged$.value)
      .subscribe(
        search => {
          this.resultsCount = search.hits;
          if (!this.isTimeLocked) {
            this.timeCountMiliseconds = search.took;
          }
          else {
            this.isTimeLocked = false;
          }
          this.sources = search.source;
        }
      );
  }
}
