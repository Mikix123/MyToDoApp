"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-checkbox/angular");
var todo_list_routing_module_1 = require("./todo-list-routing.module");
var todo_list_component_1 = require("./todo-list.component");
var calendar_component_1 = require("~/calendar/calendar.component");
var todo_list_item_component_1 = require("~/todo-list/todo-list-item/todo-list-item.component.");
var ToDoListModule = /** @class */ (function () {
    function ToDoListModule() {
    }
    ToDoListModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                todo_list_routing_module_1.ToDoListRoutingModule,
                angular_1.TNSCheckBoxModule
            ],
            declarations: [
                todo_list_component_1.ToDoListComponent,
                calendar_component_1.CalendarComponent,
                todo_list_item_component_1.ToDoListItemComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ToDoListModule);
    return ToDoListModule;
}());
exports.ToDoListModule = ToDoListModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLHlEQUFrRTtBQUVsRSx1RUFBbUU7QUFDbkUsNkRBQTBEO0FBQzFELG9FQUFrRTtBQUNsRSxpR0FBNkY7QUFpQjdGO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBZjFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGdEQUFxQjtnQkFDckIsMkJBQWlCO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHVDQUFpQjtnQkFDakIsc0NBQWlCO2dCQUNqQixnREFBcUI7YUFDeEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgVE5TQ2hlY2tCb3hNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtY2hlY2tib3gvYW5ndWxhcic7XHJcblxyXG5pbXBvcnQgeyBUb0RvTGlzdFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi90b2RvLWxpc3Qtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgVG9Eb0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi90b2RvLWxpc3QuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSBcIn4vY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvRG9MaXN0SXRlbUNvbXBvbmVudCB9IGZyb20gXCJ+L3RvZG8tbGlzdC90b2RvLWxpc3QtaXRlbS90b2RvLWxpc3QtaXRlbS5jb21wb25lbnQuXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBUb0RvTGlzdFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgVE5TQ2hlY2tCb3hNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBUb0RvTGlzdENvbXBvbmVudCxcclxuICAgICAgICBDYWxlbmRhckNvbXBvbmVudCxcclxuICAgICAgICBUb0RvTGlzdEl0ZW1Db21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3RNb2R1bGUgeyB9XHJcbiJdfQ==