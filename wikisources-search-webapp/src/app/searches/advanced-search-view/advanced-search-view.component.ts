import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SharedDataService} from "../shared-data.service";
import {NgbCalendar, NgbDateStruct, NgbDate} from "@ng-bootstrap/ng-bootstrap";

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

  dateFrom: NgbDateStruct;
  dateTo: NgbDateStruct;
  today = this.calendar.getToday();

  constructor(private router: Router, private sharedDataService: SharedDataService, private calendar: NgbCalendar) { }

  ngOnInit(): void {
    if (this.sharedDataService.onSearchOptionsChanged$.value.advanced) {
      this.all = this.sharedDataService.onSearchOptionsChanged$.value.all;
      this.any = this.sharedDataService.onSearchOptionsChanged$.value.any;
      this.exact = this.sharedDataService.onSearchOptionsChanged$.value.exact;
      this.none = this.sharedDataService.onSearchOptionsChanged$.value.none;
      // if (this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateFrom) {
      //   this.dateFrom = new NgbDate(
      //     this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateFrom.getFullYear(),
      //     this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateFrom.getMonth() + 1,
      //     this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateFrom.getDay()
      //   );
      // }
      // if (this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateTo) {
      //   this.dateTo = new NgbDate(
      //     this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateTo.getFullYear(),
      //     this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateTo.getMonth() + 1,
      //     this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateTo.getDay()
      //   );
      // }
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
    if (this.dateFrom) {
      this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateFrom = new Date(this.dateFrom.year, this.dateFrom.month - 1, this.dateFrom.day);
    }
    if (this.dateTo) {
      this.sharedDataService.onSearchOptionsChanged$.value.lastUpdateTo = new Date(this.dateTo.year, this.dateTo.month - 1, this.dateTo.day);
    }
    this.sharedDataService.onSearchOptionsChanged$.next(this.sharedDataService.onSearchOptionsChanged$.value);
    this.router.navigate(['/results']);
  }

  isSearchDisabled() {
    return (this.all == '' || this.all == undefined) &&
          (this.any == '' || this.any == undefined) &&
          (this.exact == '' || this.exact == undefined) &&
          (this.none == '' || this.none == undefined) &&
          (this.dateFrom == undefined) &&
          (this.dateTo == undefined);
  }
}
