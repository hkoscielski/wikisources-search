import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

  title: string = "Lorem Ipsum";
  content: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sollicitudin congue eros, at egestas arcu congue ut. Aliquam id facilisis felis. Proin a consectetur lectus. Integer laoreet consectetur elit quis dignissim. Cras pharetra ut ante non eleifend. In eget libero a ex porttitor vestibulum ut ac ipsum. Curabitur auctor gravida tortor et mattis. Nulla ullamcorper sed ligula sed pulvinar. Nulla condimentum purus ut mi fermentum pharetra. Praesent efficitur congue laoreet. Praesent suscipit ultrices vestibulum.\n" +
    "\n" +
    "      Praesent dapibus lectus sit amet aliquam lacinia. Suspendisse feugiat dolor at nisi fermentum, id mattis mauris lacinia. Aenean eu lacinia arcu. Nullam varius ultricies sodales. Praesent quis imperdiet odio. Duis vehicula non libero eu ultricies. Etiam odio ligula, feugiat sed bibendum ac, tincidunt elementum urna. Mauris volutpat risus non nibh eleifend, vel gravida enim sodales. Fusce ac eros ut libero varius porta volutpat vitae purus. Sed accumsan eu turpis a iaculis. Quisque vestibulum quam sed sem efficitur vulputate. Quisque rutrum, nulla non vestibulum dictum, massa est sagittis elit, non porttitor quam dui a ligula. Duis eget laoreet augue. Cras feugiat placerat orci, id sodales nibh dictum id.\n";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onCardClicked() {
    this.router.navigate(['/article']);
  }
}
