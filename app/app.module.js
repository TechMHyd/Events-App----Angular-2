"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var events_list_component_1 = require("./events/events-list.component");
var router_1 = require("@angular/router");
var add_new_component_1 = require("./events/add-new.component");
var event_detail_each_component_1 = require("./events/event-detail-each.component");
var _404_component_1 = require("./shared/404.component");
var http_1 = require("@angular/http");
var event_activator_service_1 = require("./events/event-activator.service");
var event_service_1 = require("./events/event.service");
var route = [
    { path: ' ', redirectTo: 'listview', pathMatch: 'full' },
    { path: 'addnew', component: add_new_component_1.AddNewEventComponent },
    { path: 'listview', component: events_list_component_1.EventListComponent },
    { path: 'listviewone/:id', component: event_detail_each_component_1.EventDetailsComponent, canActivate: [event_activator_service_1.EventActivatorService] },
    { path: '404', component: _404_component_1.Error404Component },
    { path: '**', redirectTo: 'listview', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(route)],
        declarations: [app_component_1.AppComponent, events_list_component_1.EventListComponent, add_new_component_1.AddNewEventComponent, event_detail_each_component_1.EventDetailsComponent, _404_component_1.Error404Component],
        providers: [event_service_1.EventService, event_activator_service_1.EventActivatorService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map