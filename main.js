(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/advanced/advanced.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/advanced/advanced.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section #page style=\"opacity: 0;\" class=\"page\">\n\n  <div class=\"container-fluid mb-5\">\n    <div class=\"row\">\n\n      <div class=\"container col-8\">\n\n        <h1 class=\"mt-5\" #introduction>Advanced</h1>\n        <p class=\"mt-3\">\n          This advanced section will briefly cover some of the more advanced features in Angular. I will not be going\n          in depth into the concepts as some of them would\n          require a whole new tutorial by themselves. However, through covering some of these concepts, I hope that you\n          will begin to understand some of the features that are available to you.\n          <br />\n          <br />\n          These topics will all be related to the Angular Router, but if you're interested in expanding your knowledge\n          in other areas of the framework please click the\n          image below: which will take you to the Angular website.\n        </p>\n\n        <div class=\"d-flex justify-content-center mt-3 text-center\">\n          <img src=\"http://itsuite.it.brighton.ac.uk/si133/images/angular.svg\" (click)=\"AngularWindow()\" />\n        </div>\n\n        <h1 class=\"mt-5\" #dataRoutes>Data Routes</h1>\n        <p class=\"mt-3\">\n          Data routes within Angular allow us to specify data that is loaded on a page, based on data that is passed\n          into the route. For example, if we hosted a page\n          that displayed the weather on certain days, we may want to filter out results to just return a single day, or\n          a week.\n          <br />\n          <br />\n          To do this we use what is known as an activated route. These are written into a router just like a normal\n          route, but with one additional tag. If we use the\n          example of the demo from the last section of the tutorial we already have a data page set up so that, when\n          the correct route is added to it, the\n          data page will display whatever you have typed into the URL.\n          <br />\n          <br />\n          The way that this is achieved is through a route that looks like this:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">app-routing.module.ts</h5>\n            <pre><code [highlight]=\"ActivatedRoute\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n          </div>\n        </div>\n\n        <p class=\"mt-3\">\n          As you can see, the route has a ':data' id. This can be replaced by anything that the user, or another\n          component routing to this, places in the url.\n          This data can then be extracted from the URL, and the code to do that is shown in the DataComponent:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">data.component.ts</h5>\n            <pre><code [highlight]=\"DataComponentExtract\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n          </div>\n        </div>\n\n        <p class=\"mt-3\">\n          This extracted data could be used in any way - I have left it as displaying the data on the webpage (using a data bind), but you\n          could use it to filter results in a table,\n          build a graph, or any number of other ways. It's a very powerful tool if you're looking to build a data heavy\n          web application.\n        </p>\n\n        <div class=\"note text-dark\">\n            <p class=\"noteBody\">\n              This will be the last point aimed specifically at the demo. From now I will be talking about concepts, \n              although I will still be providing code - this code will not be directly linked to that demo.\n            </p>\n          </div>\n\n        <h1 class=\"mt-5\" #nestedRoutes>Nested Routes</h1>\n        <p class=\"mt-3\">\n          Nested routes is probably a bad way to describe it, but nested routes are routes that are called from inside another\n          component. If you try and add a routerLink from a button within a component, that routerLink will not work. That is \n          because the router will interpret this as you trying to link within the current component (hence \"nested\").\n          <br />\n          <br />\n          To fix this, we can use a '(click)' event on our DOM element. These events listen for the specified event,\n          and carry out that function once the event\n          is complete. In this case, we will need to carry out a reroute, but how do we do this programatically?\n          <br />\n          <br />\n          Well, firstly we'll need to add a router within our component. Adding this will allow us to call any reroute\n          that we like from within the code. We do this by adding the following code to a component.ts file:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">data.component.ts</h5>\n            <pre><code [highlight]=\"NestedRouteRouterAdd\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n          </div>\n        </div>\n\n        <p class=\"mt-3\">\n          This will create a new 'router' object within the component. Next we add a function to the component that will \n          reroute the page for us. This is very simple, I will name mine BackToHome and simply add this line.\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">data.component.ts</h5>\n              <pre><code [highlight]=\"NestedRouteReroute\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n            </div>\n          </div>\n\n        <p class=\"mt-3\">\n          Finally, we need to actually make the component listen for the click event. We do this by adding a \"(click)\" \n          tag within the DOM element - shown here:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">data.component.html</h5>\n              <pre><code [highlight]=\"NestedRerouteClick\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n            </div>\n          </div>\n\n        <p class=\"mt-3\">\n          This tag can be applied to any element, for example an image or a button, and will be extremely useful. \n          Rerouting in this way will allow you a lot of control in terms of flow of the user, especially if you're \n          using router guards (these are explained later).\n        </p>\n\n\n\n\n\n        <h1 class=\"mt-5\" #externalRoutes>External Routes</h1>\n\n        <p class=\"mt-3\">\n          Although you can use simple \"href\" tags to route outside of your web application, you will need to \n          provide the full URL to avoid rerouting within your own application. Once again, the reason that you \n          may choose to do this using an Angular router is so that you can use Router Guards (I promise I'll talk \n          about them soon).\n          <br />\n          <br />\n          To achieve an external route from Angular, firstly we have to create another route within the router module. \n          This route will be slightly different as it will have a 'resolve' object and a 'data' object and, even though it's pointing externally, \n          it must still have a component attached.\n          <br />\n          <br />\n          My suggestion would be to call the route something to do with the place you are routing to, and to have your \n          component (this is something that is forced by Angular) to be your 404 page. As an example, the following code could be the route \n          for a YouTube redirect:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">app-routing.module.ts</h5>\n              <pre><code [highlight]=\"ExternalRoute\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n          </div>\n        </div>\n\n        <p class=\"mt-3\">\n          However, we also need a way to provide that route. To do this we need to add an object to the '@NGModule decorator'. Helpfully, \n          the object we are adding is called a 'provide', and put simply all it does is listen out for the route path, and provide a way to \n          redirect that route. The code for the provide looks like this:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">app-routing.module.ts</h5>\n              <pre><code [highlight]=\"ExternalRouteProvide\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n          </div>\n        </div>\n\n        <p class=\"mt-3\">\n          This may seem over-complicated, and I'll be honest with you - for the purposes of a simple website, it really is. However, if you're \n          developing a higher-end application that will be serving users or has forms on etc, you will need to know how to do this. Believe \n          it or not, this is actually the less complicated way of achieving this. If you'd like to see another implementation, visit \n          <a href=\"https://medium.com/@adrianfaciu/using-the-angular-router-to-navigate-to-external-links-15cc585b7b88\" class=\"BlueText\">this tutorial</a>.\n          I'll warn you now, if this tutorial is the first time you've heard of Angular, this is very confusing and I'd probably avoid it.\n        </p>\n\n\n        <h1 class=\"mt-5\" #routerGuards>Router Guards</h1>\n        <p class=\"mt-3\">\n          Router guards are the most powerful and also the most complex part of the router module. They allow us to \n          perform checks on the user and any page elements before we do any routing. This can be very beneficial \n          when creating a fully functional application.\n          <br />\n          <br />\n          For example, if somebody was using an app that you had built an admin section into - \n          you would clearly not want that user to simply be able to access this page. Router guards can be used \n          to stop anyone without correct authentication from accessing certain components within your site.\n          <br />\n          <br />\n          They can also be used to prompt users before leaving a page. This is useful if they are filling out \n          a form and this information will be lost upon leaving. They do this through the use of 'canActivate' and 'candeactivate' tags.\n          <br />\n          <br />\n          Guards allows us to create very intricate interactions when navigating around a website. However, to integrate them fully, \n          you would need to be able to make server API calls. Although you can fairly easily \n          create a \"fake\" example of guarding within the application, this goes far beyond a routing tutorial. \n          <br />\n          <br />\n          We can also use a combination of guards to reduce the risks of incorrect routing, which allows us to perform a string of actions \n          before we actually carry out the rerouting.\n          <br />\n          <br />\n          Beyond this, there's not much more I can explain to you without code examples, and like I said - this would be enough content to provide a \n          whole new tutorial.\n          <br />\n          <br />\n          However, there are already some very good tutorials out there that go more in depth about how to use these guards, and \n          how to communicate with various external sources (through the use of Angular Injectable Services if you're \n          interested at looking into it).\n          <br />\n          <br />\n          One such tutorial is <a href=\"https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3\" class=\"BlueText\">this article on Medium by @ryanchenkie</a>, which gives code examples of \n          this implementation.\n        </p>\n\n        <div class=\"d-flex justify-content-center\">\n          <a href=\"https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3\">\n            <img src=\"http://itsuite.it.brighton.ac.uk/si133/images/medium.svg\" class=\"img-fluid mt-3\" style=\"max-height: 40vh;\" />\n          </a>\n        </div>\n\n        <h1 class=\"mt-5\" #summary>Summary</h1>\n        <p class=\"mt-3\">\n          Hopefully during this tutorial you will have learned the following:\n        </p>\n        <ul class=\"text-dark\">\n            <li>How to create a new Angular app</li>\n            <li>How to generate new components/modules</li>\n            <li>How to create a basic router</li>\n            <li>How to link components together</li>\n            <li>A little bit about advanced router features</li>\n        </ul> \n\n        <p>\n          If you have any questions or feedback, please contact me using the information on the homepage, \n          I hope you enjoyed this tutorial and hopefully learned something new!\n        </p>\n\n        <p class=\"mt-3\">\n          If you're interested in learning a bit more about Angular, you could do much worse than the official Angular \n          tutorial found here:\n          <br />\n          <br />\n          <a href=\"https://angular.io/guide/quickstart\" class=\"BlueText\">www.angular.io/guide/quickstart</a>\n          <br />\n          <br />\n          This provides a fantastic range of tutorials on all parts of the framework and is really helpful if you're \n          interested in continuing to develop using the framework.\n        </p>\n      </div>\n\n      <div class=\"container col-3 d-none d-lg-flex pl-5\" id=\"sidebar\">\n        <ul class=\"align-items-center fixed\" id=\"sidebar-list\">\n          <li #introductionIndicator>Introduction</li>\n          <li #dataRoutesIndicator>Data Routes</li>\n          <li #nestedRoutesIndicator>Nested Routes</li>\n          <li #externalRoutesIndicator>External Routes</li>\n          <li #routerGuardsIndicator>Router Guards</li>\n          <li #summaryIndicator>Summary</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\">\n\n    <a class=\"navbar-brand border-right pr-4 logo\" routerLink=\"home\">Angular {{ '{' }}</a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"navbar-nav mr-auto\" id=\"navbar-id\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\" active\">Home</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"basics\" routerLinkActive=\" active\">Angular Basics</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"routing\" routerLinkActive=\" active\">Routing</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"advanced\" routerLinkActive=\" active\">Advanced Routing</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"review\" routerLinkActive=\" active\">Report</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<img src=\"http://itsuite.it.brighton.ac.uk/si133/images/up.svg\" class=\"hideme BackToTop d-none d-lg-flex\" (click)=\"BackUp()\" #up />"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/basics/basics.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/basics/basics.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section #page style=\"opacity: 0;\" class=\"page\">\n\n  <div class=\"container-fluid mb-5\">\n    <div class=\"row\">\n      <div class=\"container col-9\" id=\"content\">\n        <div class=\"pt-5\" #node>\n          <h1>Node.js</h1>\n        </div>\n\n        <div class=\"mt-3\">\n          <p>\n            First of all, we need to set up the environment. Angular is built, and runs on top of,\n            <a href=\"https://nodejs.org/en/download/\">Node.Js</a> and this will have to be installed onto your system\n            before continuing. Details on how to install this can be found at\n            <a href=\"https://nodejs.org/en/\">nodejs.org</a> or by clicking on the image below.\n          </p>\n        </div>\n\n        <div class=\"d-flex justify-content-center mt-3 text-center\">\n          <a href=\"https://nodejs.org/en/\">\n            <img src=\"http://itsuite.it.brighton.ac.uk/si133/images/nodejs.png\" class=\"img-fluid\" style=\"max-width:50vw;\" />\n          </a>\n        </div>\n\n        <div class=\"mt-5\">\n          <p>\n            Node.js is a server side version of Javascript, built using Chrome's Javascript engine.\n            Unlike traditional Javascript, this framework allows for server side applications like REST APIs to be\n            created within the one language.\n          </p>\n          <br />\n          <p>\n            Once this is installed, you'll need to use the node package manager (NPM) from your command line to install\n            Angular.\n            To do this, simply  type:\n          </p>\n          <code>npm install -g @angular/cli</code>\n          <p>\n            This may take a little while depending on your internet, but once the installation is complete, you're\n            finished setting up!\n            Now to create your first app\n          </p>\n        </div>\n\n        <h3 class=\"mt-5\" #firstApp>Your First App</h3>\n        <div class=\"mt-4\">\n          <p>\n            So you now have Angular installed, and creating your first app couldn't be easier.\n            The first thing you'll need to do is navigate within your command prompt to where you would like to create\n            your new Angular application. Once you have done this, you will need to type the following command:\n          </p>\n          <code>ng new first-app</code>\n          <p>\n            This command will generate the framework for\n            a basic Angular application for you to develop in any way you choose. Although you could jump straight into\n            trying to edit the application from here, why don't we start with a brief look at the default application.\n            Simply enter the following commands:\n          </p>\n          <code>cd first-app</code>\n          <code>ng serve --open</code>\n\n          <p>\n            And wait. This will open up a new browser window or tab with your new application.\n            This page may not seem like much, but it's the basis of what we will be developing later in this tutorial.\n          </p>\n        </div>\n        <div class=\"container-fluid justify-content-center mt-3 text-center\">\n          <img src=\"http://itsuite.it.brighton.ac.uk/si133/images/app.png\" class=\"img-fluid\" style=\"max-height: 40vh;\" />\n        </div>\n\n        <h3 class=\"mt-5\" #goingOn>What's going on?</h3>\n        <div class=\"mt-4\">\n          <p>\n            If we now go back to look at what was generated by the 'ng new' command, it all gets a bit\n            confusing. There are a series of folders which each contain a jumble of subfolders and files.\n            Fortunately we can ignore most of this for now, and move to the 'src/app' folder. This is the most\n            important\n            part of the Angular app for us to understand as this is where the majority of development will\n            be taking place.\n            <br />\n            <br />\n            Inside the app folder, all we currently have is what is known as the root module ('app.module.ts') and\n            a root component (built up of 4 files, all beginning \"app.component\"). If you're just looking to build a\n            single page application, you could achieve that with just these files.\n            <br />\n            <br />\n          </p>\n\n          <p class=\"d-none d-lg-flex\">\n            When the files were generated you should've ended up with an app.component.ts file that looks like\n            this:\n          </p>\n\n          <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">app.component.ts</h5>\n              <pre><code [highlight]=\"tsCode\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n            </div>\n          </div>\n\n          <p>\n            All this code does (for now) is dictate that this is a component, the identifier of the component,\n            and where to find the markup and styling for it. These files are generated automatically for you\n            when you create a new component, by navigating to your app root in a CLI and typing:\n          </p>\n\n          <code>ng generate component *</code>\n\n          <div class=\"note text-dark\">\n            <p class=\"noteBody\">\n              <strong>Tip:</strong> Replace the * with the name of the component you would like to generate\n              - for example 'Home'\n            </p>\n          </div>\n\n          <p class=\"mt-3\">\n            This allows you to split each component, or page, from one another and creating an easy to follow structure.\n            However, you will notice that although you have generated your files, you cannot actually see any new pages in your application.\n            This is where the Angular router is needed - which we will implement in the next section.\n            <br />\n            <br />\n          </p>\n\n          <div class=\"d-flex justify-content-center\">\n            <button class=\"styled-button mt-3 min-width-buttons\" type=\"button\" (click)=\"advance()\"><span>Advance</span></button>\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"container col-3 d-none d-lg-flex pl-5\" id=\"sidebar\">\n        <ul class=\"align-items-center fixed\" id=\"sidebar-list\">\n          <li #nodeIndicator>Node.js</li>\n          <li #firstAppIndicator>Your First App</li>\n          <li #goingOnIndicator>What's Going On?</li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section #page style=\"opacity: 0;\" class=\"page\">\n  <div class=\"justify-content-center d-flex h-80 mt-3\">\n    <div class=\"col-md-8 center-block flex-column\" style=\"padding-left: 0px;  padding-right: 0px; clear: none;\">\n      <img src=\"http://itsuite.it.brighton.ac.uk/si133/images/bg.jpeg\"\n        class=\"img-fluid\" />\n      <h1 class=\"top-left\" style=\"position: absolute; left:16px; top:45%; max-width: 60%; color: gray;\">Angular Routing\n        Tutorial</h1>\n    </div>\n  </div>\n\n\n\n  <div class=\"justify-content-center mt-5\">\n    <div class=\"container justify-content-center\">\n      <p class=\"text-center h1 mb-3 text-dark\">What is Angular 6?</p>\n    </div>\n\n    <div class=\"flex-container justify-content-center mt-5\">\n      <div class=\"card-group justify-content-center sizesmall\">\n\n        \n        <div class=\"card col-sm-3 border-dark card-color\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-dark\">Data Binding</h5>\n            <p class=\"card-text text-dark\">\n              Part of the power of Angular is it's ability to dynamically change data on a page as variables change. This is known as data binding.\n            </p>\n          </div>\n        </div>\n\n        <div class=\"card col-sm-3 border-dark card-color\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-dark\">Multi Platform</h5>\n            <p class=\"card-text text-dark\">\n              From mobile phones to laptops, Angular allows for any modern, evergreen web browser to load a powerful application\n              without the need for any additional application installs.\n            </p>\n          </div>\n        </div>\n\n        <div class=\"card col-sm-3 border-dark card-color\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title text-dark\">Modularity</h5>\n            <p class=\"card-text text-dark pb-3\">\n              Modularity in programming is a life saver for most developers. It's no different in Angular.\n              The way that a large scale website can be seperated into different modules helps keep an application\n              readable, easy to extend and easy to implement.\n            </p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"container justify-content-center mt-4\">\n        <p class=\"text-center text-dark h5 mt-4\">\n          Angular is a powerful framework that allows for the rapid development of data heavy web applications.\n          It’s an environment that combines the concepts of object-oriented programming with user friendly web\n          interfaces, producing bespoke, dynamic websites for users on a range of devices.\n          <br /><br />\n          Although developing an application using Angular may seem like a complicated task, the way that the framework\n          structures the code makes the development of a larger websites much easier to comprehend.\n          <br /><br />\n          For examples of where Angular has been used for developing applications, visit <a (click)=\"examples()\" id=\"OverrideBlue\">madewithangular.com</a>\n        </p>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"container-fluid justify-content-center bg-dark mt-5 pt-5 pb-5 p-0\">\n    <h1 class=\"text-light text-center pt-3\">Prerequisites</h1>\n    <div class=\"row justify-content-center pb-3\">\n      <a href=\"https://www.w3schools.com/html/\" class=\"mr-5 mt-3\">\n        <svg viewBox=\"0 0 452 520\" style=\"width: 15vw; max-width:200px;\">\n          <title>HTML5 Logo Badge</title>\n          <path fill='RGB(227,79,38)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>\n          <path fill='RGB(239,101,42)' d='M 226,472 L 375,431 410,37 226,37'/>\n          <path fill='RGB(236,237,238)' d='M 226,208 L 151,208 146,150 226,150 226,94 84,94 99,265 226,265 z M 226,355 L162,338 158,293 102,293 109,382 226,414 z'/>\n          <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L226,150 362,150 367,94 z'/>\n        </svg>      \n      </a>\n      <a href=\"https://www.w3schools.com/css/\" class=\"mr-5 mt-3\">\n        <svg viewBox=\"0 0 452 520\" style=\"width: 15vw; max-width:200px;\">\n          <title>Javascript Logo Badge</title>\n          <path fill='RGB(229,162,40)' d='M 0,0 L 451,0 410,460 225,512 41,460'/>\n          <path fill='RGB(241,191,38)' d='M 226,472 L375,431 410,37 226,37'/>\n          <path fill='RGB(236,237,238)' d='M 226,94 L 113,94 102,265 226,265 226,208 160,208 165,150 226,150 z M 226,355 L 162,338 158,293 102,293 109,382 226,414 z'/>\n          <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 357,208 226,208 z M 226,94 L 339,94 357,180 301,180 293,150 226,150 z'/>\n        </svg>\n      </a>\n      <a href=\"https://www.w3schools.com/js/\" class=\"mr-5 mt-3\">\n        <svg viewBox=\"0 0 452 520\" style=\"width: 15vw; max-width:200px;\">\n          <title>CSS3 Logo Badge</title>\n          <path fill='RGB(12,115,184)' d='M 41,460 L 0,0 451,0 410,460 225,512'/>\n          <path fill='RGB(48,169,220)' d='M 226,472 L 375,431 410,37 226,37'/>\n          <path fill='RGB(236,237,238)' d='M 226,208 L 94,208 99,265 226,265 z M 226,94 L 84,94 89,150 226,150 z M 226,355 L 102,322 109,382 226,414 z'/>\n          <path fill='RGB(255,255,255)' d='M 226,265 L 295,265 288,338 226,355 226,414 341,382 367,94 226,94 226,150 306,150 300,208 226,208 z'/>\n        </svg>     \n       </a>\n    </div>\n\n    <p class=\"container text-center text-light mt-5 h4\">As a web based platform - any prior experience in web\n      design will be useful for use in Angular. Any experience in object oriented programming will also be\n      helpful when understanding the concepts of the language.</p>\n  </div>\n\n  <div class=\"container-fluid justify-content-center mt-5 p-0\">\n    <h1 class=\"text-center pt-3\">To Come</h1>\n    <div class=\"container justify-content-center pb-3\">\n      <p class=\"text-center mt-5 p-0 h4\">\n        This tutorial will be based around how routing in Angular works, implementing a simple router and \n        looking into more complex topics. It will be aimed at webmasters who have little experience in Angular 6.\n        <br />\n        <br />\n        If you have no experience in Angular at all, please visit\n        the basics section first which will quickly get you up and running with your first project. \n        Otherwise, head straight into the routing section of the tutorial.\n      </p>\n    </div>\n    <div class=\"d-flex justify-content-center\">\n      <button class=\"styled-button mr-2 min-width-buttons align-middle\" type=\"button\" (click)=\"basics()\">Basics</button>\n      <button class=\"styled-button ml-2 min-width-buttons align-middle\" type=\"button\" (click)=\"routing()\">Routing</button>\n    </div>\n\n    <div class=\"container mt-5 pt-5 mb-5 border-top border-dark justify-content-center text-center\">\n      <h1>Contact me</h1>\n      <p class=\"mt-3 mb-3\">\n        If you have any questions about the tutorial or Angular in general, please contact me using: \n        <br />\n        <a href=\"mailto:sam.innes1@uni.brighton.ac.uk\" class=\"BlueText\">sam.innes1@uni.brighton.ac.uk</a>\n      </p>\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The d-flex tag is provided by Bootstrap, which allows me to make the page responsive very easily -->\n\n<div class=\"d-flex justify-content-center align-items-center\" style=\"height:50vh;\">\n    <h1 class=\"m-5 p-5 align-top border-right\">404</h1>\n    <h2>The page you requested was not found.</h2>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/review/review.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/review/review.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section #page style=\"opacity: 0;\" class=\"page\">\n  <img src=\"https://images.pexels.com/photos/1420701/pexels-photo-1420701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260\" id=\"bg\" />\n  <div class=\"container pt-5\">\n      <h1>Report</h1>\n      <p class=\"mt-3\">\n        When undertaking this project, I decided that I would like to cover Angular in my tutorial and create an Angular\n        application to host that tutorial on. I thought that Angular was quite an interesting topic for webmasters as it’s\n        a new technology that allows them to build dynamic websites/applications with relative ease, and it's something\n        that’s becoming more and more popular with the more people that hear about it.\n      </p>\n      <p class=\"mt-3\">\n        Angular is a very large framework and I knew I wouldn’t be able to cover the whole thing in one tutorial, so I\n        decided that I would focus on a subject that I struggled quite a lot with when I was learning the framework -\n        routing. By doing this, I wanted to also solidify my knowledge in the subject, as it’s something that is essential\n        to building a polished product.\n      </p>\n      <p class=\"mt-3\">\n        I approached this task with the mindset of what would I have wanted to know back when I started to learn Angular. I\n        hoped that by taking this approach, I could use my experiences as a strength, and that by addressing those issues,\n        I would fix the same problems that reader may have. However, I also realise that I may have therefore not covered a\n        topic as in depth as I perhaps could’ve done - I may have struggled in an area that another person wouldn’t and\n        vice versa. If I was to do this assignment again, I would try to make sure that I get feedback from the people that\n        would potentially be using the tutorial and therefore make sure I cover any concerns and weaknesses in the website.\n      </p>\n      <p class=\"mt-3\">\n        I had a fairly good understanding of how Angular works as I have used it a couple of times before, but when I came\n        to deploy the app I had a few issues. I had never deployed one before, and I couldn’t work out why I couldn’t\n        directly access some pages from a url – ‘saminnes.com/home’ would give me a 404 error from the server. After some\n        research, I realised that I would have to create an .htaccess file on a server because indexing doesn’t work in the\n        same way when using Angular. This is something I couldn’t do on the university W drive, so I also deployed this to\n        my personal domain. This taught me a valuable skill for if I want to deploy Angular apps in the future.\n      </p>\n      <p class=\"mt-3\">\n        The element that I felt I was weakest in coming into this project was UI design. It was something that I struggled\n        with throughout, and although I’m relatively happy with the outcome, it’s a skill that I feel like I’m going to\n        spend some time developing further. However, this was the most fulfilling part of the tutorial. As a computer\n        science student, I rarely get the opportunity to do some UI design – we mostly get to work on backend code. So, to\n        get the opportunity to try and work on these skills was a welcome challenge.\n      </p>\n      <p class=\"mt-3\">\n        The least rewarding part of this assignment for me was trying to condense the content down. I know that the subject\n        I have chosen is something that, unless you’re interested in learning about Angular, can be quite laborious to read\n        about. Therefore, I tried to be as aware of this issue as possible and condense the writing down while still trying\n        to maintain a good explanation of the topic. To try and make sure that the reader would still know what I was\n        talking about, I also build a very primitive demo application that they would build alongside the tutorial. My hope\n        was that, through completing that website, the reader would be able to see how everything that I was talking about\n        linked together.\n      </p>\n      <p class=\"mt-3\">\n        In all, I am relatively happy with the outcome of this project. I think that although I have identified some\n        weaknesses, both in the website and my ability, by completing this project I have not only worked towards improving\n        in those areas, but also given myself clarification on what exactly I should work on to improve further. I have\n        also taken some valuable knowledge in setting up a webserver away from this, and hopefully this will be useful in\n        the future.\n      </p>\n  </div>\n  <div class=\"container mt-5 mb-5\">\n    <h1>References</h1>\n    <ul class=\"text-dark mt-3\">\n      <li>https://medium.com/@ryanchenkie_40935/angular-authentication-using-route-guards-bf7a4ca13ae3</li>\n      <li>https://alligator.io/angular/route-guards/</li>\n      <li>HTML, CSS and JavaScript Logos created by @aidandunn: https://codepen.io/aidandunn/pen/dsBer</li>\n      <li>Node.Js logo downloaded from: https://nodejs.org/en/about/resources/</li>\n      <li>Angular logo downloaded from: https://angular.io/presskit</li>\n      <li>All other images used are from www.pexels.com</li>\n      <li>This website was built using Angular and BootStrap</li>\n    </ul>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/routing/routing.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/routing/routing.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section #page style=\"opacity: 0;\" class=\"page\">\n  <div class=\"container-fluid mb-5\">\n    <div class=\"row\">\n      <div class=\"container col-9 mt-5\">\n        <h1 #intro>Routing</h1>\n        <p class=\"mt-3\">\n          Routing is the part of Angular that let's us build a multipage application. The framework comes with a built\n          in router which is easy to set up, and provides us with some interesting features. For example, you may\n          have noticed while navigating around this site that switching pages doesn't load like a typical website\n          would.\n          <br />\n          <br />\n          It does this by loading various components within a single page, instead of loading the whole fresh pages\n          when a different url is entered. Not only is this vastly more efficient than the traditional way of loading\n          webpages, but it also allows for Angular to do things like retain data from components or use route guards -\n          more on these in the advanced section.\n          <br />\n          <br />\n          For this tutorial, I'll be using a basic app and building a router into it. If you'd like to follow along,\n          click the button below and a zip file will be downloaded. Decompress this file and use the ReadMe.txt\n          to help you get set up (it's very straightforward).\n        </p>\n\n        <div class=\"d-flex justify-content-center mt-4\">\n          <a href=\"https://www.saminnes.com/demo/Demo.zip\" download><button class=\"styled-button min-width-buttons\" type=\"button\">Download</button></a>\n        </div>\n\n        <h1 class=\"mt-5\" #setup>Setting up the Router</h1>\n        <p class=\"mt-3\">\n          The first thing we're going to need to do is set up the router. At this point it is essential to know some of the \n          basics that were taught in the previous section -\n          especially what components are and what they are used for. So to start, you will need to open your\n          preferred code editor and open the folder that contains your project.\n        </p>\n\n        <div class=\"note text-dark mt-3\">\n          <p class=\"noteBody\">\n            Note: Although my recommendation is that you use the project that I have supplied - this is not 100%\n            neccessary.\n            It's entirely possible for you to simply read this tutorial, or to follow along and generate your own\n            components.\n            However, this will likely require at least a little experience in using the framework.\n          </p>\n        </div>\n\n        <p class=\"mt-3\">\n          Once you have the folder open in your code editor, you'll want to open your 'app.module.ts' file. You'll also\n          want to open\n          a command line interface (CLI) and navigate to within the root of the app. Optionally, you may choose to use\n          a second CLI to\n          host your application using 'ng serve --open' - this isn't neccessary as we won't see any changes to our page as of\n          yet.\n          <br />\n          <br />\n          Now, at this point it would be very easy to just add a few lines to the 'app.module.ts' file and use that as\n          our router.\n          However, this is not good practice - when you start to build larger Angular apps, there will be far too much\n          clutter for one file.\n          <br />\n          <br />\n          Instead we're going to use another module that I have already defined for you - the 'app-routing.module.ts' file. \n          If you're not using the demo that I have supplied - simply type the following line in your CLI:\n        </p>\n        <code>ng generate module app-routing --flat --module=app</code>\n        <div class=\"note text-dark mt-3\">\n          <p class=\"noteBody\">\n            The flags:\n            <br />\n            --flat : Notifies the CLI to add the file in src/app instead of a new folder\n            <br />\n            <br />\n            --module=app : This automates the process of importing our new module into 'app.module.ts'\n            <br />\n            <br />\n            Once this command is run, two new files should have been generated in 'src/app', one being 'app-routing.module.ts'. The code will\n            differ slightly - simply copy and paste the following code into your file.\n          </p>\n        </div>\n\n        <p class=\"mt-3\">\n          The file should read as follows:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">app-routing.module.ts</h5>\n            <pre><code [highlight]=\"routingModuleCode\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n          </div>\n        </div>\n\n        <p class=\"mt-3\">\n          If it does - then the router is now set up for us to be able to start editing.\n        </p> \n\n        <h1 class=\"mt-5\" #routes>Routes</h1>\n        <p class=\"mt-3\">\n          Firstly, and perhaps most obviously, we need to actually define some routes. To do this, we will need to have some components to \n          actually route to. In the demo files - these components already exist, but if you're not using the demo, you'll need to generate some \n          now. If you need reminding of how to do this, please revisit the 'Basics' section of the tutorial.\n          <br />\n          <br />\n          Our components each have their own individual names that are exported so they can be identified by another module, and this is how we are \n          able to import modules into our router. In the demo project there are 3 components that we need to link together: 'HomeComponent', \n          'FormComponent' and 'DataComponent'. At this point you may have worked out how to write your own imports, but if you need a helping  \n          hand don't worry - this is all you need to add to the top of your router file:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">app-routing.module.ts</h5>\n              <pre><code [highlight]=\"importComponents\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n            </div>\n          </div>\n\n        <p class=\"mt-3\">\n          If you need to find out what the name of a component is, simply open the file and there will be a line that says 'export class *'. \n          Whatever replaces the * will be the name of your component.\n          <br />\n          <br />\n          Once you have completed all the imports, we need to create our routes. To do this, you'll be editing the constant array named 'appRoutes' above your \n          '@NGModule' decorator. This will become the array that contains all the paths of the application. But how do we populate it?\n          <br />\n          <br />\n          Component routes are made up of two seperate variables: the path, and the component that the path should load. A path effectively \n          defines what the user would traditionally see in the url, e.g. example.com/home or example.com/basics. This allows us to route a user \n          how we would like, but also allow the user to enter any url that is hosted within the app.\n          <br />\n          <br />\n          So, if we want our user to be directed to the Home component when the url is example.com/home, our element in the array would look like this:\n        </p>\n\n        <div class=\"card mt-3 mb-3 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">app-routing.module.ts</h5>\n              <pre><code [highlight]=\"route1\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n            </div>\n          </div>\n\n        <p>\n          Add the two remaining paths to your appRoutes constant and you're finished with a basic router! (Sort of)\n          <br />\n          <br />\n          Although yes, our router is working in the background, it hasn't been told where to load the components. To do this we need to add what is \n          known as a 'Router Outlet'. This is what the components are loaded into - and part of the reason that Angular is so useful. A router-outlet \n          is usually placed in the 'app.component.html' file, which is usually referred to as the root of the application.\n          <br />\n          <br />\n          If you have any experience with HTML, you will be aware that HTML is just markup - there's no constraints on anything you do. This means you \n          can place the router outlet anywhere, and the rest of the content on a page will remain static. This means that, unlike normal HTML where the \n          navbar typically is copied and pasted into each seperate HTML document, the navbar only has to be written once.\n          <br />\n          <br />\n          In this case, we will do exactly that. You should already have an 'app.component.html' file, and if you are following the demo, that will already \n          have a very primitive nav bar within it (if you aren't, simply design one yourself as you would in any other website). The markup might look \n          strange to begin with - it doesn't have doctype declarations or &lt;html&gt; tags in it so it's like an extract of a normal HTML document, \n          but to add your outlet, simply put the following at the bottom of your document:\n        </p>\n\n        <div class=\"card mt-3 mb-1 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">app.component.html</h5>\n              <pre><code [highlight]=\"routerOutlet\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n            </div>\n          </div>\n\n        <p><em>(this time it should actually work!)</em></p>\n\n        <p class=\"mt-3\">\n          Now your app should be able to route between components! Just click between the pages and they should appear. But is the routing correct?\n        </p>\n\n        <h1 class=\"mt-5\" #redirects>Redirects</h1>\n        <p class=\"mt-3\">\n          Redirecting within a website is essential to it's functionality, as it allows for a website to have many pages. At the moment, your navbar may \n          make the website redirect, but is the behaviour as you expected? After all I promised that Angular wouldn't use the typical loading of pages.\n          At this point although your links may work in your app, there's a much better way of performing redirects.\n          <br />\n          <br />\n          What we are going to be doing is replacing the 'href' links from the current implemenation, and replacing them with routerLinks. Routerlinks \n          work in a similar way, but contain the linking to within the application (more on this later). A routerLink looks like this:\n        </p>\n\n        <div class=\"card mt-3 mb-1 d-none d-lg-flex\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">app.component.html</h5>\n              <pre><code [highlight]=\"routerLinkExample\" (highlighted)=\"onHighlighted($event)\"></code></pre>\n            </div>\n          </div>\n\n          <div class=\"note text-dark mt-3\">\n              <p class=\"noteBody\">\n                Breakdown:\n                <br />\n                <br />\n                class=\"nav-link\" : As I am using Bootstrap, this is a way of styling up the navbar. <br />\n                routerLink=\"home\" : Tells the app that when this link is clicked, the router should redirect to the 'home' route. <br />\n                routerLinkActive=\" active\" : When a component is active, this will add the class \"active\" to the classlist. This means that links \n                become highlighted - again this is to do with Bootstrap\n              </p>\n            </div>\n\n        <p class=\"mt-3\">\n          Once you have replaced all of your \"href\" links to use routerLinks instead, your code should now fluidly switch between components without a \n          redirect.\n        </p>\n\n        <p class=\"mt-3\">\n          If you have some experience with web administration, at this point you may be wondering about 404 errors - something we haven't yet dealt \n          with. While hosting a website, having a dedicated page for a 404 error is good practice, as it allows for you to customize the view that users see \n          should they receive this response. With Angular, it is no different and should be dealt with by our router.\n          <br />\n          <br />\n          Firstly, you should generate a component and, as you should know how this works by now, I've left that up to you. Once generated, write \n          a route exactly how you've done up until now.\n          <br />\n          <br />\n          Once this is done, you should be able to access the route using the route that you defined. Except this is a 404 error page so why would \n          we want to access it deliberately? Instead you should use what is known as a wild card. Change your route path to be '*' and now whenever you type in an address \n          that isn't routable, Angular will automatically redirect you to a 404 page.\n          <br />\n          <br />\n          One final consideration before we can consider our router to be \"done\" is how does the router know which component to load on first access? This may \n          have been something you've noticed if you have already loaded your website - we've not actually set our default page yet. To do this, we should add another route. This \n          one should provide the path of nothing (\"\") and redirect to your chosen landing component (I would choose the Home component, but you don't have to).\n          This tells the router that this is the route that should be used as a landing page. \n        </p>\n\n        <div class=\"d-flex container justify-content-center mt-5\"><h5>We have a working router!</h5></div>\n        \n        <div class=\"container justify-content-center mt-3 mb-5 d-none d-lg-flex\">\n            \n            <img src=\"http://itsuite.it.brighton.ac.uk/si133/images/fistbump.jpeg\" class=\"img-fluid\" style=\"height:50vh; border:none; opacity: 0.9\" />\n          </div>\n\n\n        <h1 class=\"mt-5\">Next</h1>\n        <p class=\"mt-3\">\n          In the advanced section of this tutorial will focus on other features of the Angular router, which will allow you to create \n          extremely dynamic and powerful applications. These features include passing data through routes, routing from within a component, external links, and a brief \n          introduction into what router guards are.\n        </p>\n\n        <div class=\"d-flex justify-content-center\">\n            <button class=\"styled-button mt-3 min-width-buttons\" type=\"button\" (click)=\"advance()\"><span>Advance</span></button>\n          </div>\n      </div>\n\n\n\n      <div class=\"container col-3 d-none d-lg-flex pl-5\" id=\"sidebar\">\n        <ul class=\"align-items-center fixed\" id=\"sidebar-list\">\n          <li #introIndicator>Routing</li>\n          <li #setupIndicator>Router Setup</li>\n          <li #routesIndicator>Adding Routes</li>\n          <li #redirectsIndicator>Redirects</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/advanced/advanced.component.css":
/*!*************************************************!*\
  !*** ./src/app/advanced/advanced.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BlueText{\r\n    color: blue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWR2YW5jZWQvYWR2YW5jZWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkdmFuY2VkL2FkdmFuY2VkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQmx1ZVRleHR7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/advanced/advanced.component.ts":
/*!************************************************!*\
  !*** ./src/app/advanced/advanced.component.ts ***!
  \************************************************/
/*! exports provided: AdvancedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedComponent", function() { return AdvancedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fade */ "./src/app/fade.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvancedComponent = /** @class */ (function () {
    function AdvancedComponent() {
        this.active = 5;
        this.indicators = null;
        this.elements = null;
        this.ActivatedRoute = "{ path: 'data/:data', component: DataComponent }";
        this.DataComponentExtract = "import { Router, ActivatedRoute, ParamMap } from '@angular/router';\n\
.....\n\
export class DataComponent implements OnInit {\n\
  data = \"\";\n\
  constructor(route: ActivatedRoute) { \n\
    this.data = route.snapshot.params.data;\n\
  }\n\
}";
        this.NestedRouteRouterAdd = "import { Router } from \"@angular/router\";\n\n\
export class DataComponent {\n\
  constructor(private router: Router) {}\n\
}";
        this.NestedRouteReroute = "BackToHome(){\n\
  this.router.navigate(['home']);\n\
}";
        this.NestedRerouteClick = "<button type=\"button\" (click)=\"BackToHome()\">Basics</button>";
        this.ExternalRoute = "{ path: 'youtube', resolve: {url: 'youtubeResolver'}, component: NotFoundComponent, data: {externalUrl:'http://www.youtube.com'} }";
        this.ExternalRouteProvide = "providers: [\n\
  {\n\
      provide: 'youtube',\n\
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>\n\
      {\n\
          window.location.href = (route.data as any).externalUrl;\n\
      }\n\
  }\n\
],";
        window.scrollTo(0, 0);
    }
    AdvancedComponent.prototype.onScroll = function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            this.replaceIndicator(0);
        }
        else {
            for (var i = 0; i < this.indicators.length; i++) {
                if (document.documentElement.scrollTop >= this.elements[i].offsetTop) {
                    this.replaceIndicator(i);
                    break;
                }
            }
        }
    };
    AdvancedComponent.prototype.ngAfterViewInit = function () {
        _fade__WEBPACK_IMPORTED_MODULE_1__["fade"].fade(this.page);
        this.introductionIndicator.nativeElement.classList.add("scroll-indicator");
        this.indicators = [this.introductionIndicator, this.dataRoutesIndicator, this.nestedRoutesIndicator, this.externalRoutesIndicator,
            this.routerGuardsIndicator, this.summaryIndicator].reverse();
        this.elements = [this.introduction.nativeElement, this.dataRoutes.nativeElement, this.nestedRoutes.nativeElement, this.externalRoutes.nativeElement,
            this.routerGuards.nativeElement, this.summary.nativeElement].reverse();
    };
    AdvancedComponent.prototype.replaceIndicator = function (x) {
        if (x != this.active) {
            this.indicators[this.active].nativeElement.classList.remove("scroll-indicator");
            this.active = x;
            this.indicators[this.active].nativeElement.classList.add("scroll-indicator");
        }
    };
    AdvancedComponent.prototype.onHighlighted = function (e) { };
    AdvancedComponent.prototype.AngularWindow = function () {
        window.open("https://www.angular.io");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('page', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('introduction', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "introduction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataRoutes', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "dataRoutes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nestedRoutes', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "nestedRoutes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('externalRoutes', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "externalRoutes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('routerGuards', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "routerGuards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('summary', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "summary", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('introductionIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "introductionIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataRoutesIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "dataRoutesIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nestedRoutesIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "nestedRoutesIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('externalRoutesIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "externalRoutesIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('routerGuardsIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "routerGuardsIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('summaryIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdvancedComponent.prototype, "summaryIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AdvancedComponent.prototype, "onScroll", null);
    AdvancedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-advanced',
            template: __webpack_require__(/*! raw-loader!./advanced.component.html */ "./node_modules/raw-loader/index.js!./src/app/advanced/advanced.component.html"),
            styles: [__webpack_require__(/*! ./advanced.component.css */ "./src/app/advanced/advanced.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvancedComponent);
    return AdvancedComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _basics_basics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basics/basics.component */ "./src/app/basics/basics.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
/* harmony import */ var _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advanced/advanced.component */ "./src/app/advanced/advanced.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Import components






var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'basics', component: _basics_basics_component__WEBPACK_IMPORTED_MODULE_4__["BasicsComponent"] },
    { path: 'routing', component: _routing_routing_component__WEBPACK_IMPORTED_MODULE_5__["RoutingComponent"] },
    { path: 'advanced', component: _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_6__["AdvancedComponent"] },
    { path: 'review', component: _review_review_component__WEBPACK_IMPORTED_MODULE_7__["ReviewComponent"] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BackToTop{\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    margin-right: 16px;\r\n    margin-bottom: 16px;\r\n    width: 50px;\r\n\r\n    opacity: 1;\r\n\r\n    cursor: pointer;\r\n    transition: opacity 0.3s ease-in;\r\n}\r\n\r\n.hideme{\r\n    opacity: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7O0lBRVgsVUFBVTs7SUFFVixlQUFlO0lBT1AsZ0NBQWdDO0FBQzVDOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQmFja1RvVG9we1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcblxyXG4gICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG5cclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluO1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbjtcclxuICAgICAgICAgLW8tdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4uaGlkZW1le1xyXG4gICAgb3BhY2l0eTogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.eventSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(window, "scroll").subscribe(function (e) {
            _this.onWindowScroll();
        });
    };
    AppComponent.prototype.onWindowScroll = function () {
        if (document.documentElement.scrollTop > 50) {
            this.up.nativeElement.classList.remove("hideme");
        }
        else {
            this.up.nativeElement.classList.add("hideme");
        }
    };
    AppComponent.prototype.BackUp = function () {
        window.scrollTo(0, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('up', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "up", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: hljsLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _basics_basics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basics/basics.component */ "./src/app/basics/basics.component.ts");
/* harmony import */ var _routing_routing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routing/routing.component */ "./src/app/routing/routing.component.ts");
/* harmony import */ var _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./advanced/advanced.component */ "./src/app/advanced/advanced.component.ts");
/* harmony import */ var _review_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review/review.component */ "./src/app/review/review.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













function hljsLanguages() {
    return [
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_12___default.a }
    ];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"],
                _basics_basics_component__WEBPACK_IMPORTED_MODULE_6__["BasicsComponent"],
                _routing_routing_component__WEBPACK_IMPORTED_MODULE_7__["RoutingComponent"],
                _advanced_advanced_component__WEBPACK_IMPORTED_MODULE_8__["AdvancedComponent"],
                _review_review_component__WEBPACK_IMPORTED_MODULE_9__["ReviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_11__["HighlightModule"].forRoot({
                    languages: hljsLanguages
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basics/basics.component.css":
/*!*********************************************!*\
  !*** ./src/app/basics/basics.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\n    margin-bottom: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWNzL2Jhc2ljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmFzaWNzL2Jhc2ljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/basics/basics.component.ts":
/*!********************************************!*\
  !*** ./src/app/basics/basics.component.ts ***!
  \********************************************/
/*! exports provided: BasicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicsComponent", function() { return BasicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fade */ "./src/app/fade.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/styles/github.css */ "./node_modules/highlight.js/styles/github.css");
/* harmony import */ var highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_styles_github_css__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasicsComponent = /** @class */ (function () {
    function BasicsComponent(router) {
        this.router = router;
        this.active = 2;
        this.indicators = null;
        this.elements = null;
        //Code to sytax hightlight
        this.tsCode = "\
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
        window.scrollTo(0, 0);
    }
    BasicsComponent.prototype.onScroll = function () {
        for (var i = 0; i < this.indicators.length; i++) {
            if (document.documentElement.scrollTop >= this.elements[i].offsetTop) {
                this.replaceIndicator(i);
                break;
            }
        }
    };
    BasicsComponent.prototype.ngAfterViewInit = function () {
        _fade__WEBPACK_IMPORTED_MODULE_1__["fade"].fade(this.page);
        this.nodeIndicator.nativeElement.classList.add("scroll-indicator");
        this.indicators = [this.nodeIndicator, this.firstAppIndicator, this.goingOnIndicator].reverse();
        this.elements = [this.node.nativeElement, this.firstApp.nativeElement, this.goingOn.nativeElement].reverse();
    };
    BasicsComponent.prototype.advance = function () {
        this.router.navigate(['routing']);
    };
    BasicsComponent.prototype.replaceIndicator = function (x) {
        if (x != this.active) {
            this.indicators[this.active].nativeElement.classList.remove("scroll-indicator");
            this.active = x;
            this.indicators[this.active].nativeElement.classList.add("scroll-indicator");
        }
    };
    BasicsComponent.prototype.onHighlighted = function (e) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('page', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BasicsComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('node', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BasicsComponent.prototype, "node", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('firstApp', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BasicsComponent.prototype, "firstApp", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('goingOn', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BasicsComponent.prototype, "goingOn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('nodeIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BasicsComponent.prototype, "nodeIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('firstAppIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BasicsComponent.prototype, "firstAppIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('goingOnIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BasicsComponent.prototype, "goingOnIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BasicsComponent.prototype, "onScroll", null);
    BasicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basics',
            template: __webpack_require__(/*! raw-loader!./basics.component.html */ "./node_modules/raw-loader/index.js!./src/app/basics/basics.component.html"),
            styles: [__webpack_require__(/*! ./basics.component.css */ "./src/app/basics/basics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BasicsComponent);
    return BasicsComponent;
}());



/***/ }),

/***/ "./src/app/fade.ts":
/*!*************************!*\
  !*** ./src/app/fade.ts ***!
  \*************************/
/*! exports provided: fade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
var fade = /** @class */ (function () {
    function fade() {
    }
    fade.fade = function (inp) {
        var op = 0.1; // initial opacity
        var page = inp.nativeElement;
        var timer = setInterval(function () {
            if (op >= 1) {
                clearInterval(timer);
            }
            page.style.opacity = op;
            page.style.filter = 'alpha(opacity=' + op * 150 + ")";
            op += op * 0.1;
        }, 10);
    };
    return fade;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".BlueText, #OverrideBlue{\n    color: blue;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkJsdWVUZXh0LCAjT3ZlcnJpZGVCbHVle1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fade */ "./src/app/fade.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        window.scrollTo(0, 0);
    }
    HomeComponent.prototype.ngAfterViewInit = function () {
        _fade__WEBPACK_IMPORTED_MODULE_1__["fade"].fade(this.page);
    };
    HomeComponent.prototype.basics = function () {
        this.router.navigate(['basics']);
    };
    HomeComponent.prototype.routing = function () {
        this.router.navigate(['routing']);
    };
    HomeComponent.prototype.examples = function () {
        window.open("https://www.madewithangular.com");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('page', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "page", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/review/review.component.css":
/*!*********************************************!*\
  !*** ./src/app/review/review.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg{\r\n    opacity: 0;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixNQUFNO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYmd7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/review/review.component.ts":
/*!********************************************!*\
  !*** ./src/app/review/review.component.ts ***!
  \********************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fade */ "./src/app/fade.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReviewComponent = /** @class */ (function () {
    function ReviewComponent() {
    }
    ReviewComponent.prototype.ngAfterViewInit = function () {
        _fade__WEBPACK_IMPORTED_MODULE_1__["fade"].fade(this.page);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('page', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReviewComponent.prototype, "page", void 0);
    ReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-review',
            template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/app/review/review.component.html"),
            styles: [__webpack_require__(/*! ./review.component.css */ "./src/app/review/review.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewComponent);
    return ReviewComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.component.css":
/*!***********************************************!*\
  !*** ./src/app/routing/routing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed{\n    position: fixed;\n    top: 50vh;\n}\n\n#sidebar-list li{\n    list-style-type: none;\n    font-size: 1.25em;\n}\n\np{\n    margin-bottom: 0;\n}\n\ncode{\n    display: block;\n    margin-top: 2vh;\n    margin-bottom: 2vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGluZy9yb3V0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcm91dGluZy9yb3V0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZml4ZWR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTB2aDtcbn1cblxuI3NpZGViYXItbGlzdCBsaXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbnB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuY29kZXtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAydmg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/routing/routing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/routing/routing.component.ts ***!
  \**********************************************/
/*! exports provided: RoutingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponent", function() { return RoutingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fade */ "./src/app/fade.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoutingComponent = /** @class */ (function () {
    function RoutingComponent(router) {
        this.router = router;
        this.active = 3;
        this.indicators = null;
        this.elements = null;
        this.routingModuleCode = "\
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
";
        this.importComponents = "\
import { HomeComponent } from './home/home.component';\n\
import { FormComponent } from './form/form.component';\n\
import { DataComponent } from './data/data.component';\n\
";
        this.route1 = "{ path: 'home', component: HomeComponent }";
        this.routerOutlet = "<router-outlet></router-outlet>";
        this.routerLinkExample = "<a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\" active\">Angular Basics</a>";
        window.scrollTo(0, 0);
    }
    RoutingComponent.prototype.onScroll = function () {
        this.checkScroll();
    };
    RoutingComponent.prototype.checkScroll = function () {
        for (var i = 0; i < this.indicators.length; i++) {
            if (document.documentElement.scrollTop >= this.elements[i].offsetTop) {
                this.replaceIndicator(i);
                break;
            }
        }
    };
    RoutingComponent.prototype.ngAfterViewInit = function () {
        _fade__WEBPACK_IMPORTED_MODULE_1__["fade"].fade(this.page);
        this.introIndicator.nativeElement.classList.add("scroll-indicator");
        this.indicators = [this.introIndicator, this.setupIndicator, this.routesIndicator, this.redirectsIndicator].reverse();
        this.elements = [this.intro.nativeElement, this.setup.nativeElement, this.routes.nativeElement,
            this.redirects.nativeElement].reverse();
    };
    RoutingComponent.prototype.replaceIndicator = function (x) {
        if (x != this.active) {
            this.indicators[this.active].nativeElement.classList.remove("scroll-indicator");
            this.active = x;
            this.indicators[this.active].nativeElement.classList.add("scroll-indicator");
        }
    };
    RoutingComponent.prototype.advance = function () {
        this.router.navigate(['advanced']);
    };
    RoutingComponent.prototype.onHighlighted = function (e) { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('intro', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "intro", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('setup', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "setup", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('routes', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "routes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('redirects', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "redirects", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('introIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "introIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('setupIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "setupIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('routesIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "routesIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('redirectsIndicator', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "redirectsIndicator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('page', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RoutingComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], RoutingComponent.prototype, "onScroll", null);
    RoutingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-routing',
            template: __webpack_require__(/*! raw-loader!./routing.component.html */ "./node_modules/raw-loader/index.js!./src/app/routing/routing.component.html"),
            styles: [__webpack_require__(/*! ./routing.component.css */ "./src/app/routing/routing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoutingComponent);
    return RoutingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam/Desktop/App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map