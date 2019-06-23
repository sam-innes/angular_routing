import { Component, ViewChild, ElementRef } from '@angular/core';
import { fade } from '../fade';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  @ViewChild('page', { static: true }) page: ElementRef;

  constructor() {
  }

  ngAfterViewInit(){
    fade.fade(this.page);
  }

}
