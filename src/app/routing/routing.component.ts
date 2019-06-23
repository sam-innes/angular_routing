import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { fade } from "../fade";
import { Router } from "@angular/router";

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {

  active = 3;

  indicators = null;
  elements = null;

  //Title Elements
  @ViewChild('intro', { static: true }) intro: ElementRef;
  @ViewChild('setup', { static: true }) setup: ElementRef;
  @ViewChild('routes', { static: true }) routes: ElementRef;
  @ViewChild('redirects', { static: true }) redirects: ElementRef;

  //Scroll Indicator Elements
  @ViewChild('introIndicator', { static: true }) introIndicator: ElementRef;
  @ViewChild('setupIndicator', { static: true }) setupIndicator: ElementRef;
  @ViewChild('routesIndicator', { static: true }) routesIndicator: ElementRef;
  @ViewChild('redirectsIndicator', { static: true }) redirectsIndicator: ElementRef;

  @ViewChild('page', { static: true }) page: ElementRef;

  @HostListener('window:scroll') onScroll() {
    this.checkScroll();
  }

  constructor(private router: Router) {
    window.scrollTo(0, 0);
  }

  checkScroll(){
    for (var i = 0; i < this.indicators.length; i++) {
      if (document.documentElement.scrollTop >= this.elements[i].offsetTop) {
        this.replaceIndicator(i);
        break;
      }
    }
  }

  ngAfterViewInit() {
    fade.fade(this.page);
    this.introIndicator.nativeElement.classList.add("scroll-indicator");
    this.indicators = [ this.introIndicator, this.setupIndicator, this.routesIndicator, this.redirectsIndicator ].reverse();

    this.elements = [ this.intro.nativeElement, this.setup.nativeElement, this.routes.nativeElement, 
                      this.redirects.nativeElement ].reverse();
  }

  replaceIndicator(x) {
    if (x != this.active) {
      this.indicators[this.active].nativeElement.classList.remove("scroll-indicator");
      this.active = x;
      this.indicators[this.active].nativeElement.classList.add("scroll-indicator");
    }
  }

  advance(){
    this.router.navigate(['advanced']);
  }

  onHighlighted(e) {}

routingModuleCode = "\
import { RouterModule, Routes } from '@angular/router';\n\
import { NgModule } from '@angular/core';\n\n\
const appRoutes = [\n\n\
]\n\n\
@NgModule({\n\
  exports: [ RouterModule ],\n\
  imports: [ RouterModule.forRoot(\n\
    appRoutes\n\
  )]\n\
})\n\
export class AppRoutingModule { }\n\
"

importComponents = "\
import { HomeComponent } from './home/home.component';\n\
import { FormComponent } from './form/form.component';\n\
import { DataComponent } from './data/data.component';\n\
"
route1 = "{ path: 'home', component: HomeComponent }"

routerOutlet = "<router-outlet></router-outlet>"

routerLinkExample = "<a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\" active\">Angular Basics</a>";

}