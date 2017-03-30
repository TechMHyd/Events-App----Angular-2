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
var router_1 = require("@angular/router");
var event_service_1 = require("./event.service");
var events_list_component_1 = require("./events-list.component");
var AddNewEventComponent = (function () {
    function AddNewEventComponent(_EventService, router, _eventListComponent) {
        this._EventService = _EventService;
        this.router = router;
        this._eventListComponent = _eventListComponent;
    }
    AddNewEventComponent.prototype.submitNew = function () {
        var newEventDetails = {
            eventId: this.eventId,
            eventName: this.eventName,
            eventDate: this.eventDate,
            eventPlace: this.eventPlace
        };
        this._EventService.addNewEvents(newEventDetails);
        this.router.navigate(['listOfEvents']);
        //toastr.success('Successfuly added Event');
    };
    AddNewEventComponent.prototype.cancel = function () {
        this.router.navigate(['listview']);
    };
    return AddNewEventComponent;
}());
AddNewEventComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'add-new.component.html',
        styleUrls: ['add-new.component.css']
    }),
    __metadata("design:paramtypes", [event_service_1.EventService,
        router_1.Router, events_list_component_1.EventListComponent])
], AddNewEventComponent);
exports.AddNewEventComponent = AddNewEventComponent;
//# sourceMappingURL=add-new.component.js.map