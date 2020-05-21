import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Source} from "../search.service";
import {SharedDataService} from "../shared-data.service";

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

  @Input() source: Source;

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
  }

  onCardClicked() {
    this.sharedDataService.actualSource = this.source;
    this.router.navigate(['/article']);
  }
}
