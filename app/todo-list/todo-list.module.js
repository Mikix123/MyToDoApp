"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var todo_list_routing_module_1 = require("./todo-list-routing.module");
var todo_list_component_1 = require("./todo-list.component");
var ToDoListModule = /** @class */ (function () {
    function ToDoListModule() {
    }
    ToDoListModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                todo_list_routing_module_1.ToDoListRoutingModule
            ],
            declarations: [
                todo_list_component_1.ToDoListComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ToDoListModule);
    return ToDoListModule;
}());
exports.ToDoListModule = ToDoListModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1saXN0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tbGlzdC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLHVFQUFtRTtBQUNuRSw2REFBMEQ7QUFjMUQ7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFaMUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsZ0RBQXFCO2FBQ3hCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHVDQUFpQjthQUNwQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgVG9Eb0xpc3RSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vdG9kby1saXN0LXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFRvRG9MaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vdG9kby1saXN0LmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgVG9Eb0xpc3RSb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVG9Eb0xpc3RDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9Eb0xpc3RNb2R1bGUgeyB9XHJcbiJdfQ==