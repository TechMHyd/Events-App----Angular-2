import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,ActivatedRoute,Router } from '@angular/router';
import { EventService } from './event.service';
@Injectable()
export class EventActivatorService implements CanActivate{

    constructor(private _eventService: EventService, private _router:Router, private _activatedRoute:ActivatedRoute){}

    canActivate(route:ActivatedRouteSnapshot){
        console.log(route.params['id']);
        var eventExists = !!this._eventService.getEventById(route.params['id']);
        console.log(eventExists);
        if(!eventExists){
            this._router.navigate(['/404']);
        }
        return eventExists;
    }
}