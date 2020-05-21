import { Injectable } from '@angular/core';
import {DatePipe} from "@angular/common";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {SearchOptions} from "./shared-data.service";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  searchSourcesWithFilterOptions(filterOptions: SearchOptions): Observable<Search> {
    if (filterOptions.advanced) {
      return this.searchSources(
        filterOptions.all ? filterOptions.all : undefined,
        filterOptions.exact ? filterOptions.exact : undefined,
        filterOptions.any ? filterOptions.any : undefined,
        filterOptions.none ? filterOptions.none : undefined,
        filterOptions.lastUpdateFrom ? filterOptions.lastUpdateFrom : undefined,
        filterOptions.lastUpdateTo ? filterOptions.lastUpdateTo : undefined,
        filterOptions.size ? filterOptions.size : undefined,
        filterOptions.from ? filterOptions.from : undefined);
    }
    else {
      return this.searchSources(undefined, undefined, filterOptions.any, undefined, undefined, undefined, undefined, undefined);
    }
  }

  searchSources(all?: string, exact?: string, any?: string, none?: string, lastUpdateFrom?: Date, lastUpdateTo?: Date, size?: number, from?: number): Observable<Search> {
    let params = new HttpParams();
    if (all) params = params.set('all', all);
    if (exact) params = params.set('exact', exact);
    if (any) params = params.set('any', any);
    if (none) params = params.set('none', none);
    if (lastUpdateFrom) params = params.set('lastUpdateFrom', lastUpdateFrom.toString());
    if (lastUpdateTo) params = params.set('lastUpdateTo', lastUpdateTo.toString());
    if (size) params = params.set('size', size.toString());
    if (from) params = params.set('from', from.toString());
    console.log("Headers: " + params.toString());
    return this.httpClient.get<Search>(`${environment.apiBaseUrl}/api/v1/sources`, { params: params });
  }

  getSourceById(sourceId: string): Observable<Source> {
    return this.httpClient.get<Source>(`${environment.apiBaseUrl}/api/v1//sources/${sourceId}`);
  }
}

export class Search {
  hits: number;
  took: number;
  source?: Source[];

  constructor(hits?: number, took?: number, source?: Source[]) {
    this.hits = hits;
    this.took = took;
    this.source = source;
  }
}

export class Source {
  id: string;
  category: string[];
  title: string;
  text: string;
  auxiliaryText: string[];
  lastUpdate: string;

  constructor(id?: string, category?: string[], title?: string, text?: string, auxiliaryText?: string[], lastUpdate?: string) {
    this.id = id;
    this.category = category;
    this.title = title;
    this.text = text;
    this.auxiliaryText = auxiliaryText;
    this.lastUpdate = lastUpdate;
  }
}

// public class SearchResponseDTO {
//
//   private final Long hits;
//   private final Long took;
//   private final List<SourceResponseDTO> source;
// }

// public class SourceResponseDTO {
//
//   private final String id;
//   private final List<String> category;
//   private final String title;
//   private final String text;
//   private final List<String> auxiliaryText;
//   private final Instant lastUpdate;
// }
