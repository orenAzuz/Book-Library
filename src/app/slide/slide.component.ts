import { Component, Input } from '@angular/core';

@Component({
  selector: 'carousel-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {
  @Input() public src: string;
  @Input() public slideNo: number;
  @Input() public isHidden: boolean;

  constructor() {}
}