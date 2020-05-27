import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SharedDataService} from "../shared-data.service";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {MonoTypeOperatorFunction, Observable, interval} from "rxjs";
import {SearchService} from "../search.service";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  isInputFocused: boolean = false;
  isMouseOverInput: boolean = false;
  inputValue: string;
  lastInputValue: string;

  hints: string[] = [];

  @ViewChild('searchBox', {static: true}) searchBox;

  constructor(private router: Router, private sharedDataService: SharedDataService, private searchService: SearchService) { }

  ngOnInit(): void {
    if (!this.sharedDataService.onSearchOptionsChanged$.value.advanced) {
      this.inputValue = this.sharedDataService.onSearchOptionsChanged$.value.any;
    }
    interval(200).subscribe((val) => { this.refreshHints(); });
  }

  onBasicSearchClicked() {
    this.sharedDataService.onSearchOptionsChanged$.value.any = this.inputValue;
    this.sharedDataService.onSearchOptionsChanged$.value.advanced = false;
    this.sharedDataService.onSearchOptionsChanged$.next(this.sharedDataService.onSearchOptionsChanged$.value);
    this.router.navigate(['/results']);
  }

  onAdvancedSearchClicked() {
    this.router.navigate(['/advanced']);
  }

  isBasicSearchDisabled() {
    return this.inputValue == '' || this.inputValue == undefined
  }

  refreshHints() {
    if (this.lastInputValue != this.inputValue) {
      this.lastInputValue = this.inputValue;
      this.searchService.searchSources(undefined, undefined, this.inputValue, undefined, undefined, undefined, undefined, undefined)
        .subscribe(
          search => {
            this.hints = search.source.map(s => s.title);
          }
        );
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this.hints.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
