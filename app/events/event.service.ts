import { Component, Injectable } from '@angular/core';
import { IEvents } from './events';

@Injectable()
export class EventService {
  eventDetails: IEvents;
  eventList: IEvents[] = [
    {
        eventId: "AS54",
        eventName: "Angular 2 Conf.",
        eventDate: "2nd March,2017",
        eventPlace: "Hyderabad"
    },
    {
        eventId: "CA12",
        eventName: "Node Conf",
        eventDate: "24th March,2017",
        eventPlace: "Hyderabad"
    },
    {
        eventId: "AA01",
        eventName: "Sunburn - Martin Garix",
        eventDate: "24th March,2017",
        eventPlace: "Hyderabad - will be notidied soon"
    },
    {
        eventId: "SA04",
        eventName: "IND vs AUS 1st ODI",
        eventDate: "18th March,2017",
        eventPlace: "Hyderabad Stadium"
    },
    {
        eventId: "AX87",
        eventName: "IND vs AUS 2nd T20",
        eventDate: "24th March,2017",
        eventPlace: "Hyderabad Stadium"
    }
  ];
  getEvents(): IEvents[] {
        return this.eventList;
    };

  getEventById(eventId: string):IEvents{
      for(let i=0; i< this.eventList.length; i++){
        if(this.eventList[i].eventId === eventId){
            this.eventDetails = this.eventList[i];
        }
      }
      return this.eventDetails;
  }

    addNewEvents(newEventDetails: IEvents): void{
        this.eventList.push(newEventDetails);
      //  console.log(this.eventList);
    }
}
