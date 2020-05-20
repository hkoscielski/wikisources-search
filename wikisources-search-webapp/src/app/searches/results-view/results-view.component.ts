import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results-view',
  templateUrl: './results-view.component.html',
  styleUrls: ['./results-view.component.css']
})
export class ResultsViewComponent implements OnInit {

  resultsCount: number = 9124123;
  timeCountMiliseconds: number = 914;

  constructor() { }

  ngOnInit(): void {
  }

}
