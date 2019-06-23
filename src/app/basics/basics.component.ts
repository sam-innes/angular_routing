import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { fade } from '../fade';
import { Router } from "@angular/router";

import 'highlight.js/styles/github.css';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent {

  @ViewChild('page', { static: true }) page: ElementRef;

  //Title Elements
  @ViewChild('node', { static: true }) node: ElementRef;
  @ViewChild('firstApp', { static: true }) firstApp: ElementRef;
  @ViewChild('goingOn', { static: true }) goingOn: ElementRef;

  //Scroll Indicator Elements
  @ViewChild('nodeIndicator', { static: true }) nodeIndicator: ElementRef;
  @ViewChild('firstAppIndicator', { static: true }) firstAppIndicator: ElementRef;
  @ViewChild('goingOnIndicator', { static: true }) goingOnIndicator: ElementRef;

  active = 2;

  indicators = null;
  elements = null;

  @HostListener('window:scroll') onScroll() {
    for(var i = 0; i < this.indicators.length; i++){
      if(document.documentElement.scrollTop >= this.elements[i].offsetTop){
        this.replaceIndicator(i);
        break;
      }
    }
  }

  constructor(private router: Router) {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    fade.fade(this.page);
    this.nodeIndicator.nativeElement.classList.add("scroll-indicator");
    this.indicators = [this.nodeIndicator, this.firstAppIndicator, this.goingOnIndicator].reverse();
    this.elements = [this.node.nativeElement, this.firstApp.nativeElement, this.goingOn.nativeElement].reverse();
  }

  advance(){
    this.router.navigate(['routing']);
  }

  replaceIndicator(x){
    if(x != this.active){
      this.indicators[this.active].nativeElement.classList.remove("scroll-indicator");
      this.active = x;
      this.indicators[this.active].nativeElement.classList.add("scroll-indicator");

    }
  }
  
  onHighlighted(e) {
  }




  //Code to sytax hightlight
  tsCode = "\
  import { BrowserModule } from '@angular/platform-browser';\n\
  import { NgModule } from '@angular/core';\n\
  \n\
  import { AppComponent } from './app.component';\n\
  \n\
  @NgModule({\n\
    declarations: [\n\
      AppComponent\n\
    ],\n\
    imports: [\n\
      BrowserModule\n\
    ],\n\
    providers: [],\n\
    bootstrap: [AppComponent]\n\
  })\n\
  export class AppModule { }\n\
  ";


}