import { Component, ViewChild, ElementRef } from '@angular/core';
import { fade } from "../fade";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('page', { static: true }) page: ElementRef;

  constructor(private router: Router) {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    fade.fade(this.page);
  }

  basics(){
    this.router.navigate(['basics']);
  }

  routing(){
    this.router.navigate(['routing']);
  }

  examples(){
    window.open("https://www.madewithangular.com");
  }

}
