import { Injectable } from '@angular/core';
import {Source} from "./search.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  actualSource: Source;
  // actualSearchOptions: SearchOptions = new SearchOptions();
  onSearchOptionsChanged$: BehaviorSubject<SearchOptions> = new BehaviorSubject<SearchOptions>(new SearchOptions());

  constructor() {
    // this.actualSearchOptions.any = 'test';
  }
}

export class SearchOptions {
  advanced?: boolean = false;
  all?: string;
  exact?: string;
  any?: string;
  none?: string;
  lastUpdateFrom?: Date;
  lastUpdateTo?: Date;
  size?: number;
  from?: number;

  constructor(all?: string, exact?: string, any?: string, none?: string, lastUpdateFrom?: Date, lastUpdateTo?: Date, size?: number, from?: number) {
    this.all = all;
    this.exact = exact;
    this.any = any;
    this.none = none;
    this.lastUpdateFrom = lastUpdateFrom;
    this.lastUpdateTo = lastUpdateTo;
    this.size = size;
    this.from = from;
  }
}
