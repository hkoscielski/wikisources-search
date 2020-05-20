import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-advanced-search-view',
  templateUrl: './advanced-search-view.component.html',
  styleUrls: ['./advanced-search-view.component.css']
})
export class AdvancedSearchViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBackClicked() {
    this.router.navigate(['/main']);
  }

  onSearchClicked() {
    this.router.navigate(['/results']);
  }
}
