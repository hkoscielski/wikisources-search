import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {

  isInputFocused: boolean = false;
  isMouseOverInput: boolean = false;

  @ViewChild('searchBox', {static: true}) searchBox;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBasicSearchClicked() {
    this.router.navigate(['/results']);
  }

  onAdvancedSearchClicked() {
    this.router.navigate(['/advanced']);
  }
}
