import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home/home.component';
import { trigger,style,transition,animate,keyframes,query, stagger } from '@angular/animations';
import { slideInOutAnimation } from './_animations/index';
const routes: Routes = [
  { pathMatch: 'full', path: "",
  component:DefaultComponent, data: { animation: 'default' }},
  { pathMatch: 'full', path: "home",
  component:HomeComponent , data: { animation: 'home' }  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
@Component({
  selector: 'app-root',
  animations: [slideInOutAnimation],
  
     // attach the fade in animation to the host (root) element of this component
     host: { '[@slideInOutAnimation]': '' }
})
export class AppRoutingModule { }
