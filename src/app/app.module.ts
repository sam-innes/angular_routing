import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicsComponent } from './basics/basics.component';
import { RoutingComponent } from './routing/routing.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { ReviewComponent } from './review/review.component';

import { AppRoutingModule } from './/app-routing.module';

import { HighlightModule } from 'ngx-highlightjs';
import typescript from 'highlight.js/lib/languages/typescript';


export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    BasicsComponent,
    RoutingComponent,
    AdvancedComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
