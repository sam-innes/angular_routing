import { NgModule }             from '@angular/core';
import { RouterModule, Routes, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

//Import components
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicsComponent } from './basics/basics.component';
import { RoutingComponent } from './routing/routing.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { ReviewComponent } from './review/review.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'basics', component: BasicsComponent },
  { path: 'routing', component: RoutingComponent },
  { path: 'advanced', component: AdvancedComponent },
  { path: 'review', component: ReviewComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(
    appRoutes
  )]
})

export class AppRoutingModule {}
