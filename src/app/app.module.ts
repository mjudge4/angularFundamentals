import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import{
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  EventResolver,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  CreateSessionComponent
  
}from './events/index';

import { DurationPipe } from './events/shared/duration.pipe'
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { EventService } from './events/shared/event.service';
import {JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective,  }from './common/index';

import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

import { SessionListComponent } from './session-list/session-list.component';

import { HttpClientModule } from '@angular/common/http'

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    DurationPipe,
    CollapsibleWellComponent
  ],
  providers: [EventService, 
    {provide:TOASTR_TOKEN, useValue: toastr},
    {provide:JQ_TOKEN, useValue: jQuery},
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}
