import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './events/event.service';
//import { EventRouteActivator } from './events/event-route-activator.service';

@Component({
    selector: 'pm-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [EventService]
})
export class AppComponent {

    submitNew(): void {
        //return 'ABC';
    }

}
