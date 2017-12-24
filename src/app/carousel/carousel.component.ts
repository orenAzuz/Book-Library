
import { Component, OnInit, Input, OnDestroy, ViewChild, forwardRef,ViewChildren,AfterViewInit ,ElementRef} from '@angular/core';
import 'rxjs/add/operator/takeWhile';

import { CarouselService } from '../carousel-service.service';
import { ICarouselConfig } from '../icarousel-config.app';
import {  WindowWidthService } from '../window-width-service.service';

// import { PinsComponent } from '../pins-component/pins-component.component';
// import { CarouselArrowsComponent } from '../arrows/arrows.component';
// import { CarouselHandlerDirective } from '../carousel-handler-directive.directive';
import {PinsComponent,CarouselArrowsComponent,CarouselHandlerDirective } from '../provider';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() private sources: string[];
  @Input() private config: ICarouselConfig;
  
  @ViewChild(forwardRef(() => CarouselHandlerDirective)) private carouselHandlerDirective: CarouselHandlerDirective;
  @ViewChild(CarouselArrowsComponent) private carouselArrowsComponent: CarouselArrowsComponent;
  @ViewChild(PinsComponent) private pinsComponent: PinsComponent;
 
  private autoplayIntervalId;
  private preventAutoplay: boolean;

  public loadedImages: string[];
  public galleryLength: number;
  public currentSlide = 0;

  constructor(private carouselService: CarouselService, private windowWidthService: WindowWidthService) {  
  }

  ngOnInit() {
    this.initData();
    
  }
  
  public initData() {
    this.galleryLength = this.sources.length;

    const [showImmediate, ...showWhenLoad] = this.sources;
    this.loadedImages = this.config.verifyBeforeLoad ? [showImmediate] : this.sources;

    if (this.galleryLength < 2) {
      return;
    }

    this.carouselService.init(showWhenLoad, this.config);

    this.carouselService.onImageLoad()
      .takeWhile(() => !!this.galleryLength)
      .subscribe(
        (image) => this.loadedImages.push(image)
      );

    if (this.config.autoplay) {
      this.config.autoplayDelay = this.config.autoplayDelay < 1000 ? 1000 : this.config.autoplayDelay;

      const minWidth = this.config.stopAutoplayMinWidth;

      this.windowWidthService.onResize(minWidth, true)
        .takeWhile(() => !!this.galleryLength)
        .subscribe(
        (isMinWidth) => {
          this.preventAutoplay = !isMinWidth;
          this.onHandleAutoplay(!this.config.autoplay);
        }
      );
    }
  }

  public onChangeSlide(direction: string): void {
    if (direction === 'prev') {
      this.currentSlide = this.currentSlide === 0 ? this.loadedImages.length - 1 : --this.currentSlide;
    } else {
      this.currentSlide = this.currentSlide === this.loadedImages.length - 1 ? 0 : ++this.currentSlide;
    }
    
    this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
    this.disableCarouselNavBtns();
  }

  public onChangeSlideIndex(index: number): void {
    if (index === this.currentSlide) {
      return;
    }

    const direction = index > this.currentSlide ? 'next' : 'prev';

    this.currentSlide = index;
    this.carouselHandlerDirective.setNewSlide(this.currentSlide, direction);
    this.disableCarouselNavBtns();
  }

  public onHandleAutoplay(stopAutoplay): void {
    if (stopAutoplay || this.preventAutoplay) {
      clearInterval(this.autoplayIntervalId);
      return;
    }

    this.startAutoplay(this.config.autoplayDelay);
  }

  private startAutoplay(delay: number): void {
    this.autoplayIntervalId = setInterval(() => {
      this.onChangeSlide('next');
      this.pinsComponent.disableNavButtons();
      this.carouselArrowsComponent.disableNavButtons();
    }, delay);
  }

  private disableCarouselNavBtns(): void {
    if (!this.config.animation) {
      return;
    }

    this.carouselArrowsComponent.disableNavButtons();
    this.pinsComponent.disableNavButtons();
  }

  ngOnDestroy() {
    if (this.autoplayIntervalId) {
      clearInterval(this.autoplayIntervalId);
    }
  }

}