import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  @ViewChild('up', { static: true }) up: ElementRef;

  eventSubscription;

  constructor() {
  }

  ngAfterViewInit(){
    this.eventSubscription = fromEvent(window, "scroll").subscribe(e => {
      this.onWindowScroll();
    });
  }

  onWindowScroll(){
    if(document.documentElement.scrollTop > 50){
      this.up.nativeElement.classList.remove("hideme")
    }
    else{
      this.up.nativeElement.classList.add("hideme")
    }
  }

  BackUp(){
    window.scrollTo(0,0);
  }

}
