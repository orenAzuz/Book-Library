import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from '../icarousel-config.app';
import { CarouselComponent } from '../carousel/carousel.component';

import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],

})
export class DefaultComponent implements OnInit {


  constructor(private router: Router) { }


  public imageSources: string[] = [
    'http://samswicegood.com/wp-content/uploads/2014/05/cropped-free-book-_-free-Novel-_-books-for-exchange.jpg',
    'https://c1.staticflickr.com/5/4018/4408981718_350fee29e1.jpg',
    'https://www.arts.gov/sites/default/files/styles/large-620/public/Books_0.jpg?itok=j7dQ-kbm',
    'https://static.pexels.com/photos/159872/book-open-pages-literature-159872.jpeg'
 ];
 
 widgets: Array<object>;
 
   ngOnInit() {
     this.widgets = this.generateWidgets(10);
  
   }
 
   generateWidgets = (num: number) => {
     const result = [];
     for (let i = 0; i < num; i++) {
       result.push({title: 'Widget' + i});
     }
     return result;
   }


     // example config
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: true,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 5000,
    stopAutoplayMinWidth: 768
  };

}
