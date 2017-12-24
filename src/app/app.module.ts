import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { MaterialModule } from './material.module';
import {InterceptorModule} from './http-request-iterceptor'
import { HttpClientModule} from '@angular/common/http';
import { DefaultComponent } from './default/default.component';
import { CapitalizePipePipe } from './capitalize-pipe.pipe';
import { RemoveBookComponent } from './remove-book/remove-book.component';
import { ForbiddenValidatorDirective } from './forbidden-validator-directive.directive';
import {ErrorStateMatcher,ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselHandlerDirective } from './carousel-handler-directive.directive';
import { CarouselService } from './carousel-service.service';
import { WindowWidthService} from './window-width-service.service';
import { PinsComponent} from './pins-component/pins-component.component';
import { SlideComponent } from './slide/slide.component';
import { CarouselArrowsComponent } from './arrows/arrows.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    DefaultComponent, 
    CapitalizePipePipe, 
    RemoveBookComponent,
    ForbiddenValidatorDirective,
    CarouselComponent,
    CarouselHandlerDirective,
    PinsComponent,
    SlideComponent,
    CarouselArrowsComponent, 

  ],
  imports: [ 
  
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    InterceptorModule,
    
   
    
  ],

  entryComponents: [RemoveBookComponent],
  providers: [DataService,CarouselService,WindowWidthService
    ,{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher, }],
  bootstrap: [AppComponent]
})
export class AppModule { }
