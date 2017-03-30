"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EventService = (function () {
    function EventService() {
        this.eventList = [
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
    }
    EventService.prototype.getEvents = function () {
        return this.eventList;
    };
    ;
    EventService.prototype.getEventById = function (eventId) {
        for (var i = 0; i < this.eventList.length; i++) {
            if (this.eventList[i].eventId === eventId) {
                this.eventDetails = this.eventList[i];
            }
        }
        return this.eventDetails;
    };
    EventService.prototype.addNewEvents = function (newEventDetails) {
        this.eventList.push(newEventDetails);
        //  console.log(this.eventList);
    };
    return EventService;
}());
EventService = __decorate([
    core_1.Injectable()
], EventService);
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map