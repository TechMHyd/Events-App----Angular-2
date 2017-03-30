import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent }  from './app.component';
import { EventListComponent } from './events/events-list.component';
import { RouterModule } from '@angular/router';
import { AddNewEventComponent } from './events/add-new.component';
import { EventDetailsComponent } from './events/event-detail-each.component';
import { Error404Component } from './shared/404.component';
import { HttpModule } from '@angular/http';
import { EventActivatorService } from './events/event-activator.service';
import { EventService } from './events/event.service';

const route=[
      {path:' ', redirectTo: 'listview', pathMatch:'full'},
      {path:'addnew', component:AddNewEventComponent},
      {path:'listview', component:EventListComponent},
      {path:'listviewone/:id', component:EventDetailsComponent, canActivate:[EventActivatorService]},
      {path:'404', component: Error404Component},
      {path:'**', redirectTo: 'listview', pathMatch:'full'}
    ];

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ,RouterModule.forRoot(route) ],
  declarations: [ AppComponent, EventListComponent, AddNewEventComponent,EventDetailsComponent,Error404Component ],
  providers: [EventService,EventActivatorService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  //console.log(AppComponent.temp);
 }
