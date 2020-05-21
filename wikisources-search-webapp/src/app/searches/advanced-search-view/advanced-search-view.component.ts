import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SharedDataService} from "../shared-data.service";

@Component({
  selector: 'app-advanced-search-view',
  templateUrl: './advanced-search-view.component.html',
  styleUrls: ['./advanced-search-view.component.css']
})
export class AdvancedSearchViewComponent implements OnInit {

  all: string;
  any: string;
  exact: string;
  none: string;

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    if (this.sharedDataService.onSearchOptionsChanged$.value.advanced) {
      this.all = this.sharedDataService.onSearchOptionsChanged$.value.all;
      this.any = this.sharedDataService.onSearchOptionsChanged$.value.any;
      this.exact = this.sharedDataService.onSearchOptionsChanged$.value.exact;
      this.none = this.sharedDataService.onSearchOptionsChanged$.value.none;
    }
  }

  onBackClicked() {
    this.router.navigate(['/main']);
  }

  onSearchClicked() {
    this.sharedDataService.onSearchOptionsChanged$.value.advanced = true;
    this.sharedDataService.onSearchOptionsChanged$.value.all = this.all;
    this.sharedDataService.onSearchOptionsChanged$.value.any = this.any;
    this.sharedDataService.onSearchOptionsChanged$.value.exact = this.exact;
    this.sharedDataService.onSearchOptionsChanged$.value.none = this.none;
    this.sharedDataService.onSearchOptionsChanged$.next(this.sharedDataService.onSearchOptionsChanged$.value);
    this.router.navigate(['/results']);
  }

  isSearchDisabled() {
    return (this.all == '' || this.all == undefined) &&
          (this.any == '' || this.any == undefined) &&
          (this.exact == '' || this.exact == undefined) &&
          (this.none == '' || this.none == undefined);
  }
}
