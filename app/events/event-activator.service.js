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
var EventActivatorService = (function () {
    function EventActivatorService(_eventService, _router, _activatedRoute) {
        this._eventService = _eventService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
    }
    EventActivatorService.prototype.canActivate = function (route) {
        console.log(route.params['id']);
        var eventExists = !!this._eventService.getEventById(route.params['id']);
        console.log(eventExists);
        if (!eventExists) {
            this._router.navigate(['/404']);
        }
        return eventExists;
    };
    return EventActivatorService;
}());
EventActivatorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [event_service_1.EventService, router_1.Router, router_1.ActivatedRoute])
], EventActivatorService);
exports.EventActivatorService = EventActivatorService;
//# sourceMappingURL=event-activator.service.js.map