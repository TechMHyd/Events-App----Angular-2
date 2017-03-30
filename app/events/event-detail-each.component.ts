import { Component,OnInit,trigger, state, style, transition, animate } from '@angular/core';
import { EventService } from './event.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  moduleId: module.id,
  templateUrl: 'event-detail-each.html',
  styles: ['.well{background-color: #485563; margin-top: 6%; cursor: cell;}']
})
export class EventDetailsComponent implements OnInit{
  event: any

  constructor(private _eventService: EventService, private _activatedRoute: ActivatedRoute, private _router: Router){}

  ngOnInit(): void{
     this.event = this._eventService.getEventById(this._activatedRoute.snapshot.params['id']);
  }

  cancel(): void{
    this._router.navigate(['listview']);
  }
}
