import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {SharedDataService} from "../shared-data.service";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  isInputFocused: boolean = false;
  isMouseOverInput: boolean = false;
  inputValue: string;

  @ViewChild('searchBox', {static: true}) searchBox;

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    if (!this.sharedDataService.onSearchOptionsChanged$.value.advanced) {
      this.inputValue = this.sharedDataService.onSearchOptionsChanged$.value.any;
    }
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
}
