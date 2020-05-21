import { Component, OnInit } from '@angular/core';
import {SharedDataService} from "../shared-data.service";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  title: string = "Lorem Ipsum";
  content: string = "\n" +
    "\n" +
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales convallis ligula vel gravida. Nulla tempus hendrerit magna, a vestibulum metus convallis ac. Integer tempus aliquet dui non malesuada. Aenean eget elit faucibus, laoreet sem vitae, ullamcorper arcu. Donec rhoncus aliquet sapien eget ultrices. Vestibulum est tellus, vulputate ut pulvinar eget, laoreet pharetra augue. Integer dignissim tellus tellus, finibus auctor arcu vehicula vitae. Aenean venenatis vitae lacus ac imperdiet. Praesent quam purus, condimentum eget malesuada ut, tincidunt faucibus tellus. Pellentesque vehicula nec neque id elementum. Aenean posuere sollicitudin egestas. Proin ut nisi rutrum, efficitur diam eu, gravida magna. Praesent sit amet sollicitudin nunc, ac fermentum risus. Sed placerat lectus metus, ac vulputate orci vehicula in.\n" +
    "\n" +
    "Maecenas accumsan eget mi non fringilla. Sed diam ante, mollis vel ipsum ac, molestie imperdiet metus. Quisque a nulla eget arcu ultricies eleifend. Integer nunc felis, dapibus vitae urna at, scelerisque semper nisi. Nullam hendrerit ullamcorper odio vehicula luctus. Mauris vel dapibus ante. Duis non lacinia lectus, in convallis purus. Ut in volutpat tellus. Aenean cursus, tortor id vehicula efficitur, justo nunc scelerisque ipsum, ac pellentesque purus dolor id lectus. Suspendisse convallis lorem quis rhoncus faucibus. Suspendisse sit amet faucibus erat, quis vulputate lorem. Donec imperdiet quam quis lorem volutpat dapibus. Quisque vehicula leo sodales, pulvinar ligula at, rutrum lacus. Donec nec lacus sodales, gravida turpis at, vestibulum lacus.\n" +
    "\n" +
    "Cras ac placerat sem. Aenean in magna pharetra, eleifend lorem nec, porttitor nisi. Mauris ultricies porta enim, a lacinia dui varius nec. Vivamus massa magna, molestie sit amet varius a, varius sed ante. Nullam venenatis laoreet magna ut malesuada. Sed sem nibh, lacinia sit amet viverra eget, scelerisque sit amet arcu. Fusce iaculis tortor efficitur placerat consequat. Donec volutpat ipsum nunc, non commodo urna semper a. Nulla varius orci eget ipsum porttitor vehicula. Sed sed magna ultrices, porttitor libero ut, aliquet risus. Quisque blandit ex et eleifend ornare. Quisque vitae feugiat sapien. Aliquam suscipit leo sit amet nisi ornare, in lobortis sem pulvinar. Vivamus eget elit sed justo tincidunt efficitur. Cras maximus nunc id leo accumsan, in tempus ligula elementum.\n" +
    "\n" +
    "Cras et sapien eu enim ultricies sollicitudin quis id quam. Aenean sed pellentesque odio, et iaculis nisl. Aenean et ornare dolor. Etiam sollicitudin varius ultricies. Donec non metus dui. Mauris posuere, massa a porttitor bibendum, purus nibh bibendum ipsum, eget hendrerit orci lectus in diam. Ut at diam sed nunc pellentesque venenatis a et tellus. Sed in lobortis felis. Donec mattis non enim in lacinia. Nulla hendrerit pellentesque dolor, eget rhoncus ex mollis eu.\n" +
    "\n" +
    "Quisque id felis et turpis tristique pharetra id sit amet leo. Phasellus consectetur mattis pharetra. Nam condimentum porttitor ipsum, vitae gravida ipsum pretium in. Ut venenatis et mi fringilla tempor. Etiam neque nunc, lacinia quis maximus vel, pulvinar at risus. Proin pharetra arcu quis lorem volutpat, in imperdiet est tempus. Nullam dignissim, ipsum quis interdum dignissim, arcu erat ornare leo, consectetur cursus mi felis non mi. Aliquam est elit, dignissim vel risus ac, consequat ornare leo. Nam vitae arcu ante. Sed accumsan quis ipsum nec lacinia. Praesent eu vulputate lectus.";

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit(): void {
  }

}
