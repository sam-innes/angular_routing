import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { fade } from '../fade';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.css']
})
export class AdvancedComponent {

  @ViewChild('page', { static: true }) page: ElementRef;

  @ViewChild('introduction', { static: true }) introduction: ElementRef;
  @ViewChild('dataRoutes', { static: true }) dataRoutes: ElementRef;
  @ViewChild('nestedRoutes', { static: true }) nestedRoutes: ElementRef;
  @ViewChild('externalRoutes', { static: true }) externalRoutes: ElementRef;
  @ViewChild('routerGuards', { static: true }) routerGuards: ElementRef;
  @ViewChild('summary', { static: true }) summary: ElementRef;

  //Scroll Indicator Elements
  @ViewChild('introductionIndicator', { static: true }) introductionIndicator: ElementRef;
  @ViewChild('dataRoutesIndicator', { static: true }) dataRoutesIndicator: ElementRef;
  @ViewChild('nestedRoutesIndicator', { static: true }) nestedRoutesIndicator: ElementRef;
  @ViewChild('externalRoutesIndicator', { static: true }) externalRoutesIndicator: ElementRef;
  @ViewChild('routerGuardsIndicator', { static: true }) routerGuardsIndicator: ElementRef;
  @ViewChild('summaryIndicator', { static: true }) summaryIndicator: ElementRef;

  active = 5;

  indicators = null;
  elements = null;

  @HostListener('window:scroll') onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.replaceIndicator(0);
    }

    else{
      for(var i = 0; i < this.indicators.length; i++){
        if(document.documentElement.scrollTop >= this.elements[i].offsetTop){
          this.replaceIndicator(i);
          break;
        }
      }
    }
  }

  constructor() {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(){
    fade.fade(this.page);
    this.introductionIndicator.nativeElement.classList.add("scroll-indicator");

    this.indicators = [ this.introductionIndicator, this.dataRoutesIndicator, this.nestedRoutesIndicator, this.externalRoutesIndicator,
                        this.routerGuardsIndicator, this.summaryIndicator ].reverse();

    this.elements   = [ this.introduction.nativeElement, this.dataRoutes.nativeElement, this.nestedRoutes.nativeElement, this.externalRoutes.nativeElement,
                        this.routerGuards.nativeElement, this.summary.nativeElement ].reverse();
  }

  replaceIndicator(x){
    if(x != this.active){
      this.indicators[this.active].nativeElement.classList.remove("scroll-indicator");
      this.active = x;
      this.indicators[this.active].nativeElement.classList.add("scroll-indicator");

    }
  }

  onHighlighted(e){}

  AngularWindow(){
    window.open("https://www.angular.io");
  }




ActivatedRoute = "{ path: 'data/:data', component: DataComponent }";

DataComponentExtract = "import { Router, ActivatedRoute, ParamMap } from '@angular/router';\n\
.....\n\
export class DataComponent implements OnInit {\n\
  data = \"\";\n\
  constructor(route: ActivatedRoute) { \n\
    this.data = route.snapshot.params.data;\n\
  }\n\
}";

NestedRouteRouterAdd = "import { Router } from \"@angular/router\";\n\n\
export class DataComponent {\n\
  constructor(private router: Router) {}\n\
}";
NestedRouteReroute = "BackToHome(){\n\
  this.router.navigate(['home']);\n\
}";
NestedRerouteClick = "<button type=\"button\" (click)=\"BackToHome()\">Basics</button>";

ExternalRoute = "{ path: 'youtube', resolve: {url: 'youtubeResolver'}, component: NotFoundComponent, data: {externalUrl:'http://www.youtube.com'} }"
ExternalRouteProvide = "providers: [\n\
  {\n\
      provide: 'youtube',\n\
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>\n\
      {\n\
          window.location.href = (route.data as any).externalUrl;\n\
      }\n\
  }\n\
],"
}
