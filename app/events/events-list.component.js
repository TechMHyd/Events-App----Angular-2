"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var event_service_1 = require("./event.service");
var router_1 = require("@angular/router");
//import { AppComponent } from 'app/app.component';
var EventListComponent = (function () {
    function EventListComponent(_EventService, router) {
        this._EventService = _EventService;
        this.router = router;
        this.eventsPanelHeader = 'All Events';
    }
    EventListComponent.prototype.ngOnInit = function () {
        this.eventsList = this._EventService.getEvents();
    };
    EventListComponent.prototype.addNew = function () {
        this.router.navigate(['addnew']);
    };
    return EventListComponent;
}());
EventListComponent = __decorate([
    core_1.Component({
        selector: 'events-list',
        moduleId: module.id,
        templateUrl: 'events-list.component.html',
        styleUrls: ['events-list.component.css']
    }),
    __metadata("design:paramtypes", [event_service_1.EventService,
        router_1.Router])
], EventListComponent);
exports.EventListComponent = EventListComponent;
//# sourceMappingURL=events-list.component.js.map