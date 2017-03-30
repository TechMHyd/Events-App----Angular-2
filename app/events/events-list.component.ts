import { Component, OnInit } from '@angular/core';
import { IEvents } from './events';
import { EventService } from './event.service';
import { Router } from '@angular/router';
//import { AppComponent } from 'app/app.component';

@Component({
    selector:'events-list',
    moduleId: module.id,
    templateUrl: 'events-list.component.html',
    styleUrls: ['events-list.component.css']
})

export class EventListComponent implements OnInit{
  eventsPanelHeader: string = 'All Events'
  eventsList: IEvents[];
  event: string;
  constructor(private _EventService: EventService,
              private router: Router){}
  ngOnInit(): void{
        this.eventsList = this._EventService.getEvents();
    }
  addNew(): void{
        this.router.navigate(['addnew']);
  }
  
}
