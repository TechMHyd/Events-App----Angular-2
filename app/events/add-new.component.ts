import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './event.service';
import { EventListComponent } from './events-list.component';

@Component({
  moduleId: module.id,
  templateUrl: 'add-new.component.html',
  styleUrls: ['add-new.component.css']
})

export class AddNewEventComponent {
eventId: string;
eventName: string;
eventDate: string;
eventPlace: string;

constructor(private _EventService:EventService,
            private router:Router,private _eventListComponent:EventListComponent){  }

  submitNew(): void{
    let newEventDetails = {
      eventId: this.eventId,
      eventName: this.eventName,
      eventDate: this.eventDate,
      eventPlace: this.eventPlace
    }
    this._EventService.addNewEvents(newEventDetails);
    this.router.navigate(['listOfEvents']);
    //toastr.success('Successfuly added Event');
  }

  cancel(): void{
    this.router.navigate(['listview']);
  }
}
